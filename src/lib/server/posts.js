import { error, redirect } from '@sveltejs/kit';
import { postsPerPage } from '#lib/config.js';
import { categories } from '#lib/utils/categories.js';
import { slugFromPath } from '#lib/utils/posts.js';

const metadata = import.meta.glob('/src/lib/posts/*.md', { eager: true, import: 'metadata' });

const allPosts = Object.entries(metadata)
	.map(([path, post]) => {
		const slug = slugFromPath(path);
		if (isNaN(new Date(post.date))) throw new Error(`Invalid date in post ${slug}: ${post.date}`);
		return { ...post, slug };
	})
	.sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPosts = (category) =>
	category ? allPosts.filter((post) => post.categories?.includes(category)) : allPosts;

export const getPostsPage = ({ page, category }) => {
	if (!(category in categories)) error(404, 'Category not found');

	const matching = getPosts(category);
	const offset = (page - 1) * postsPerPage;
	const posts = matching.slice(offset, offset + postsPerPage);
	if (page > 1 && !posts.length) error(404, 'Page not found');

	return { posts, total: matching.length };
};

// Page 1 lives at the index route, so it redirects there rather than being duplicated
export const parsePage = (param, redirectTo) => {
	const page = Number(param);
	if (!Number.isInteger(page)) error(404, 'Page not found');
	if (page <= 1) redirect(301, redirectTo);
	return page;
};
