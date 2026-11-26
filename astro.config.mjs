import { defineConfig } from 'astro/config';

// Site publié sur GitHub Pages : https://patricktchando.github.io/portfolio/
export default defineConfig({
  site: 'https://patricktchando.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
});
