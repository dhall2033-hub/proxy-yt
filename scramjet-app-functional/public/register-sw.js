"use strict";
const stockSW = "./sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
async function registerSW() {
  if (!navigator.serviceWorker) throw new Error("Your browser doesn't support service workers.");
  if (location.protocol !== "https:" && !swAllowedHostnames.includes(location.hostname)) {
    throw new Error("Service workers require HTTPS outside localhost.");
  }
  await navigator.serviceWorker.register(stockSW);
}
