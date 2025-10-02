import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', 'svx']
		})],
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src/*'
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
