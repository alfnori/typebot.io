import type { PluginOption } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(async () => {
  const { default: tsconfigPaths } = await import("vite-tsconfig-paths");

  return {
    plugins: [tsconfigPaths() as PluginOption],
    test: {
      include: ["**/*.test.ts"],
      globals: true,
      environment: "jsdom",
    },
  };
});
