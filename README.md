<h1>vue-pure-admin</h1>

**中文** | [English](./README.en-US.md)

## 简介

`vue-pure-admin` 是一款开源免费且开箱即用的中后台管理系统模版。完全采用 `ECMAScript` 模块（`ESM`）规范来编写和组织代码，使用了最新的 `Vue3`、
`Vite`、`Element-Plus`、`TypeScript`、`Pinia`、`Tailwindcss` 等主流技术开发

## 预览

[点我查看预览](https://haoygit.github.io/vue-pure-admin)

<p align="center">
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/1.jpg">
  <br />
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/2.jpg">
</p>

暗色风格

<p align="center">
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/3.jpg">
  <br />
  <img alt="PureAdmin" src="https://xiaoxian521.github.io/hyperlink/img/vue-pure-admin/4.jpg">
</p>

### 使用 `Gitpod`

在 `Gitpod`（适用于 `GitHub` 的免费在线开发环境）中打开项目，并立即开始编码.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/haoygit/vue-pure-admin)

### 安装依赖

```bash
cd vue-pure-admin

pnpm install
```

### 启动平台

```bash
pnpm dev
```

### 项目打包

```bash
pnpm build
```

## Docker 与 CI/CD 部署

本项目提供生产级的 **Nginx 优化配置**、**Docker 分阶段构建** 及 **GitHub Actions / Jenkins CI/CD 部署** 架构支持。

### 1. 交付文件概览

| 配置文件 / 工具                                                              | 说明                                                                                                                      |
| :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [`docker/nginx.conf`](./docker/nginx.conf)                                   | 生产级 Nginx 配置（Vue SPA 路由、1年 Hash 强缓存、`index.html` 协商/无缓存、Gzip 压缩、安全 Headers 与 `/api/` 反向代理） |
| [`Dockerfile`](./Dockerfile)                                                 | 分阶段构建 Dockerfile（Node.js 20 + pnpm -> Nginx Alpine），带有依赖层缓存与健康检查                                      |
| [`docker-compose.yml`](./docker-compose.yml)                                 | Docker Compose 服务编排文件（包含端口映射、健康检查与日志轮转配置）                                                       |
| [`.github/workflows/docker-ci-cd.yml`](./.github/workflows/docker-ci-cd.yml) | GitHub Actions CI/CD 流水线（代码校验 -> Docker 打包推送 GHCR -> SSH 远程部署）                                           |
| [`Jenkinsfile`](./Jenkinsfile)                                               | 企业级 Jenkins 声明式流水线（支持环境选择、镜像仓库推送、SSH 自动部署与通知）                                             |

### 2. Docker 本地构建与启动

1. 自定义镜像名为 `vue-pure-admin` 的镜像（请注意下面命令末尾有一个点 `.` 表示使用当前路径下的 `Dockerfile` 文件）

```bash
docker build -t vue-pure-admin .
```

2. 启动 Docker 容器或通过 Compose 一键拉起

```bash
# 方式一：直接运行容器 (转发主机的 8080 端口)
docker run -d -p 8080:80 --name pure-admin vue-pure-admin

# 方式二：使用 Docker Compose 一键启动
docker-compose up -d
```

操作完上面命令后，在浏览器打开 `http://localhost:8080` 即可预览。

当然也可以通过 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 可视化界面去操作 `docker` 项目，如下图

<p align="center">
  <img alt="docker-desktop" width="100%" src="https://xiaoxian521.github.io/hyperlink/img/docker-desktop.jpg">
</p>

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交您的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## `Git` 提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
