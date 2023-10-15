import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { uglify } from "rollup-plugin-uglify";
// import { resolve } from "path";

export default defineConfig({
  base: "/israel/",
  plugins: [react()],
  //   resolve: {
  //     alias: {
  //       "~": resolve(__dirname, "src"),
  //     },
  //   },
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg"],
  build: {
    rollupOptions: {
      plugins: [
        uglify({
          mangle: true,
        }),
      ],
    },
  },
});

//   css: {
//     modules: {
//       localsConvention: "camelCaseOnly",
//     },
//   },

// postcss({
//   modules: {
//     generateScopedName: "[hash:base64:8]",
//   },
//   autoModules: false,
// }),
