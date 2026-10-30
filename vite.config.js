import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Post images are decorative and written in the CMS without alt text, so give them an empty one
const rehypeEmptyAlt = () => (tree) => {
	const visit = (node) => {
		if (node.tagName === 'img') node.properties.alt ??= '';
		node.children?.forEach(visit);
	};
	visit(tree);
};

export default defineConfig({
	plugins: [
		sveltekit({
			// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
			extensions: ['.svelte', '.md'],
			preprocess: [
				vitePreprocess(),

				mdsvex({
					// The default mdsvex extension is .svx; this overrides that.
					extensions: ['.md'],
					// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
					rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeEmptyAlt]
				})
			],

			// src/routes/admin only exists on the dev server; static/admin serves the CMS in production
			adapter: adapter({ strict: false })
		})
	]
});
