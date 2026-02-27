import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'portfoliov2-production-ffc3.up.railway.app'
    ]
  }
})