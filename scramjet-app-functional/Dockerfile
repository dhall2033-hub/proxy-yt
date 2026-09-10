FROM node:20-bookworm-slim
RUN corepack enable && corepack prepare pnpm@10.18.3 --activate
WORKDIR /app
COPY package.json ./
RUN pnpm install --frozen-lockfile=false
COPY public ./public
COPY src ./src
ENV PORT=8080
EXPOSE 8080
CMD ["pnpm","start"]
