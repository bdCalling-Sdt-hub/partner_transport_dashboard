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
    // host: "192.168.12.90",
    // port: "3001",
     host: "10.0.60.43",
     port: "3002",
  },
});
