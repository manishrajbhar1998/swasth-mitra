import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import ViteEslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      tailwindcss(),
      // !isProduction && ViteEslint(), // ESLint runs only in dev
    ].filter(Boolean),
    server: {
      port: 3000,
      allowedHosts: ['swasthmitra.in', 'www.swasthmitra.in'],
      open: true, // Optional: auto opens browser
    },
  };
});

