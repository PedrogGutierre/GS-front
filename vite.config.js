import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Define o base path para Vercel
  build: {
    outDir: 'dist', // Define a pasta de saída da build
  },
});
