import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/Components'),
    },
  },
  server: {
    host: "157.245.94.100",
    port: "3001",
    //  host: "192.168.10.26",
    //  port: "3002",
  },
});
