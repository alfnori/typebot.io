import { solidPlugin } from "esbuild-plugin-solid";
import { defineConfig } from "tsup";
import { version } from "./package.json";

export default defineConfig((options) => {
  const isWatch = !!options.watch;
  const isProd = process.env.NODE_ENV === "production";

  return [
    // ✅ Base ESM build
    {
      entry: ["src/index.ts"],
      minify: !isWatch,
      format: "esm",
      platform: "browser",
      dts: true,
    },
    // ✅ Web/Solid build
    {
      entry: ["src/web.ts"],
      minify: !isWatch,
      format: "esm",
      platform: "browser",
      loader: {
        ".css": "text",
      },
      banner: {
        js: `// v${version}`,
      },

      // ✅ Solid.js + Node 22 compatible setup
      esbuildPlugins: [solidPlugin()],
      esbuildOptions(options) {
        options.alias = {
          "solid-js/web": "./src/solid-polyfill.ts",
        };

        // ✅ Ensure correct environment + module resolution
        options.define = {
          "process.env.NODE_ENV": JSON.stringify(
            process.env.NODE_ENV || (isProd ? "production" : "development"),
          ),
        };

        // ✅ Required for Solid: informs esbuild which conditions to apply
        options.conditions = [process.env.NODE_ENV || "development"];
      },
    },
  ];
});
