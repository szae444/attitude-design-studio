// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages preview lives at https://szae444.github.io/attitude-design-studio/
// When moving to the client's custom domain: set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://szae444.github.io',
  base: '/attitude-design-studio',
});
