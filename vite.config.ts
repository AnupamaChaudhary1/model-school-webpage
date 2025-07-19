import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/model-school-webpage/" : "/", // ✅ required for GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "docs", // ✅ GitHub Pages needs this to serve from /docs folder
    emptyOutDir: true, // optional: cleans /docs before building
  },
}));
