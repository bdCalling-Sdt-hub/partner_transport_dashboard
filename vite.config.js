import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    host: "192.168.10.26",
    port: "3002",
    // host: "157.245.94.100",
    // port: "3001",
  }
})
