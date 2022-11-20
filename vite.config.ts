import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'index.html',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
