import { resolve } from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "frontend", "src", "index.ts"),
      name: "script",
      fileName: "script",
      formats: ["iife"],
    },
    outDir: "App_plugins/Infocaster.Umbraco.IcomoonPicker",
    sourcemap: true,
    rollupOptions: {
      external: ["@umbraco-ui/uui"],
    },
  },
  publicDir: resolve(__dirname, "frontend", "public"),
  plugins: [
    checker({
      typescript: true,
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./frontend/src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "frontend", "src"),
    },
  },
});
