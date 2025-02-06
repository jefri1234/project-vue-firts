import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({

  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
  
  plugins: [vue()],
})
