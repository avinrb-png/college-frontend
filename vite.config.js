import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(process.cwd(), 'public'),
  base: './',
  publicDir: false,
  build: {
    outDir: resolve(process.cwd(), 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'public/index.html'),
        result: resolve(process.cwd(), 'public/result.html'),
        admin: resolve(process.cwd(), 'public/admin.html'),
        'admin-login': resolve(process.cwd(), 'public/admin-login.html')
      },
      output: {
        manualChunks: undefined
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});
