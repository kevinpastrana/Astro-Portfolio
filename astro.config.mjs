// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tusitio.com', // TODO: reemplazar por el dominio real cuando lo tengas
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});