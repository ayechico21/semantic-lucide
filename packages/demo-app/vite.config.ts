import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import type { PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
  resolve: {
    alias: {
      "semantic-lucide": path.resolve(__dirname, "../semantic-lucide/src"),
    },
  },
});
