import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  server: {
    host: true,
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
