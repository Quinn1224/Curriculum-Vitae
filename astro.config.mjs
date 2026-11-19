import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [icon(), alpinejs()],
  output: 'static',
  outDir: '/var/www/cv',
  vite: {
    plugins: [tailwindcss()],
  },
});