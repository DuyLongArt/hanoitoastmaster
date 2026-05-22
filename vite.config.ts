import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite reads this file to know how to bundle the app.
// - `react()` enables JSX + Fast Refresh (instant updates while you edit).
// - `tailwindcss()` lets you use Tailwind classes without a separate PostCSS config.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
