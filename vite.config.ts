import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function kichBanIndexPlugin(): Plugin {
  return {
    name: "kich-ban-index",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const r = req as { url?: string };
        const path = r.url ?? "";
        if (path === "/kich-ban" || path === "/kich-ban/") {
          r.url = "/kich-ban/index.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), kichBanIndexPlugin()],
  server: {
    host: true,
    port: 5173,
  },
});
