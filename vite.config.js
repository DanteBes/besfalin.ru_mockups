import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // checker нужен только в режиме разработки, чтобы не зависал production build
    command === 'serve' &&
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint .',
          useFlatConfig: true,
        },
      }),
  ],
  server: {
    allowedHosts: ['dev5173.besfalin.ru'],
  },
}))
