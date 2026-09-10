# Scramjet GitHub Site — functional Scramjet-App setup

This is a small, customized deployment based on the official MercuryWorkshop Scramjet-App architecture.

## Run locally

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm start
```

Then open `http://localhost:8080`.

## Deploy

GitHub Pages is **not** suitable for the fully functional version because Scramjet-App needs a Node server and a WebSocket Wisp endpoint. Deploy this repository to a Node-capable host (for example a VPS/container platform), or use the included Dockerfile.

### Docker

```bash
docker build -t my-scramjet .
docker run --rm -p 8080:8080 my-scramjet
```

For a public deployment, put HTTPS in front of the service. Service workers require HTTPS except on localhost.

## Important

The proxy can consume significant bandwidth and some websites may block or rate-limit proxy traffic. Use it only where you have permission to access and proxy the traffic.

This project follows the official Scramjet-App pattern: Fastify serves the app and Scramjet assets, while Wisp handles the WebSocket transport. The official project documents `pnpm install` / `pnpm start` and notes that libcurl transport is used by the example.
