import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@store', replacement: '/src/store' },
    ],
  },
})
