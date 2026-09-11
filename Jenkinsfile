pipeline {
    agent any

    parameters {
        choice(
            name: 'DEPLOY_ENV',
            choices: ['production', 'staging'],
            description: '选择部署的目标环境'
        )
        booleanParam(
            name: 'SKIP_LINT',
            defaultValue: false,
            description: '是否跳过代码 Lint & TypeCheck 检查'
        )
        string(
            name: 'DOCKER_REGISTRY',
            defaultValue: 'registry.cn-hangzhou.aliyuncs.com',
            description: 'Docker 镜像仓库地址 (如 Aliyun ACR / Harbor)'
        )
        string(
            name: 'DOCKER_NAMESPACE',
            defaultValue: 'pure-admin',
            description: '镜像仓库 Namespace / 租户'
        )
    }

    environment {
        APP_NAME = 'vue-pure-admin'
        // Docker 凭据 ID (需在 Jenkins 凭据管理中提前配置凭据)
        DOCKER_CREDS_ID = 'docker-registry-credentials'
        // SSH 服务器凭据 ID
        SSH_CREDS_ID = 'target-server-ssh-key'
        // 目标部署服务器 IP (根据 DEPLOY_ENV 动态配置，生产与测试服务器分离)
        SERVER_IP = "${params.DEPLOY_ENV == 'production' ? '192.168.1.100' : '192.168.1.101'}"
        // 获取 short git commit
        SHORT_COMMIT = ""
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '15'))
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo "===> [Stage 1] 正在从 Git 拉取最新代码..."
                checkout scm
                script {
                    SHORT_COMMIT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    echo "当前 Git Commit: ${SHORT_COMMIT}"
                }
            }
        }

        stage('Code Quality Check') {
            when {
                expression { return !params.SKIP_LINT }
            }
            steps {
                echo "===> [Stage 2] 执行代码语法检查与 TypeScript 类型校验..."
                // 使用 Node.js plugin 提供的 node 环境，或容器化 Node 节点
                sh '''
                    corepack enable
                    pnpm install --no-frozen-lockfile
                    pnpm run typecheck
                    pnpm run lint
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "===> [Stage 3] 构建 Docker 多阶段离线镜像..."
                script {
                    def imageFullName = "${params.DOCKER_REGISTRY}/${params.DOCKER_NAMESPACE}/${env.APP_NAME}:${params.DEPLOY_ENV}-${env.SHORT_COMMIT}"
                    def imageLatestName = "${params.DOCKER_REGISTRY}/${params.DOCKER_NAMESPACE}/${env.APP_NAME}:${params.DEPLOY_ENV}-latest"

                    sh "docker build -t ${imageFullName} -t ${imageLatestName} ."
                }
            }
        }

        stage('Push Image to Registry') {
            steps {
                echo "===> [Stage 4] 推送镜像至私有镜像仓库 / 阿里云 ACR..."
                script {
                    def imageFullName = "${params.DOCKER_REGISTRY}/${params.DOCKER_NAMESPACE}/${env.APP_NAME}:${params.DEPLOY_ENV}-${env.SHORT_COMMIT}"
                    def imageLatestName = "${params.DOCKER_REGISTRY}/${params.DOCKER_NAMESPACE}/${env.APP_NAME}:${params.DEPLOY_ENV}-latest"

                    withCredentials([usernamePassword(credentialsId: env.DOCKER_CREDS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login ${params.DOCKER_REGISTRY} -u ${DOCKER_USER} -p '${DOCKER_PASS}'"
                        sh "docker push ${imageFullName}"
                        sh "docker push ${imageLatestName}"
                    }
                }
            }
        }

        stage('Deploy to Target Server') {
            steps {
                echo "===> [Stage 5] 远程 SSH 自动化容器部署..."
                script {
                    def imageLatestName = "${params.DOCKER_REGISTRY}/${params.DOCKER_NAMESPACE}/${env.APP_NAME}:${params.DEPLOY_ENV}-latest"

                    sshagent([env.SSH_CREDS_ID]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no root@${env.SERVER_IP} '
                                echo "登录镜像仓库..."
                                docker pull ${imageLatestName}

                                echo "停止并重新启动前端容器..."
                                docker stop ${env.APP_NAME}-frontend || true
                                docker rm ${env.APP_NAME}-frontend || true

                                docker run -d \
                                  --name ${env.APP_NAME}-frontend \
                                  --restart always \
                                  -p 80:80 \
                                  ${imageLatestName}

                                echo "清理过期无用镜像..."
                                docker image prune -af --filter "until=48h"
                            '
                        """
                    }
                }
        stage('Health Verification') {
            steps {
                echo "===> [Stage 6] 校验部署结果与容器运行状态..."
                script {
                    sshagent([env.SSH_CREDS_ID]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no root@${env.SERVER_IP} '
                                sleep 3
                                if docker ps | grep ${env.APP_NAME}-frontend > /dev/null; then
                                    echo "✅ 容器服务运行正常！"
                                else
                                    echo "❌ 容器未正常运行！"
                                    exit 1
                                fi
                            '
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            echo "===> 清理本地临时 Docker 镜像与 workspace..."
            script {
                sh "docker rmi ${params.DOCKER_REGISTRY}/${params.DOCKER_NAMESPACE}/${env.APP_NAME}:${params.DEPLOY_ENV}-${env.SHORT_COMMIT} || true"
            }
            cleanWs()
        }
        success {
            echo "✅ [SUCCESS] 部署成功！访问地址: http://${env.SERVER_IP}"
            // 可通过 curl 触发飞书/钉钉 Webhook 通知
            // sh 'curl -X POST -H "Content-Type: application/json" -d "{\"msg_type\":\"text\",\"content\":{\"text\":\"✅ Vue-Pure-Admin 部署成功！\"}}" https://open.feishu.cn/open-apis/bot/v2/hook/xxx'
        }
        failure {
            echo "❌ [FAILURE] 构建或部署失败，请检查控制台输出日志！"
        }
    }
}
