import type { PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths() as PluginOption], // cast to satisfy TypeScript
  test: {
    include: ["**/*.test.ts"],
    globals: true, // optional, depends on your setup
    environment: "jsdom", // optional, or "node"
  },
});
