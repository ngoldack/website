import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; // ++
import tailwind from '@astrojs/tailwind';
import markdoc from '@astrojs/markdoc';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({
		analytics: true,
	}),
	integrations: [tailwind(), markdoc()],
	vite: {
		plugins: [
			Icons({
				compiler: 'astro',
			}),
		],
	},
});
