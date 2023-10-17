import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { uglify } from 'rollup-plugin-uglify';

export default defineConfig({
  base: '/support-israel/',
  plugins: [react()],
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
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