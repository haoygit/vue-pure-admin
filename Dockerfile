# =========================================================
# Stage 1: Build Stage (Node.js 24 + pnpm)
# =========================================================
FROM node:24-alpine AS build-stage

WORKDIR /app

# 安装与本地一致的 pnpm 大版本
# 注意：lockfileVersion 9.0 并非 pnpm 9 专属（pnpm 9/10/11 通用），
# 项目 engines 要求 pnpm>=11，且 pnpm-workspace.yaml 使用了 pnpm 11 的 allowBuilds 字段
RUN npm config set registry https://registry.npmmirror.com \
  && npm install -g pnpm@11

# 优先复制依赖描述文件（必须包含 pnpm-workspace.yaml，否则 install 阶段读不到 workspace 配置）
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 安装依赖 (使用 BuildKit 缓存挂载机制)
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --no-frozen-lockfile

# 复制项目源代码并构建产物
COPY . .
ARG VITE_APP_ENV=production
RUN pnpm build --mode ${VITE_APP_ENV}

# =========================================================
# Stage 2: Production Stage (Nginx Alpine)
# =========================================================
FROM nginx:alpine AS production-stage

LABEL maintainer="vue-pure-admin"

# 复制生产环境 Nginx 配置文件
COPY docker/nginx.conf /etc/nginx/nginx.conf

# 从构建阶段复制打包静态文件 dist
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 暴露 HTTP 端口
EXPOSE 80

# 容器健康检查
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]