import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/model-school-webpage/" : "/", // ✅ this handles local vs deploy

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Add more plugins here if needed
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
