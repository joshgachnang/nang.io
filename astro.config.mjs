import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://joshgachnang.com',
  integrations: [mdx()],
});
