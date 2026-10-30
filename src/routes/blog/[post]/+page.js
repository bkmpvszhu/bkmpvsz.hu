import { error } from '@sveltejs/kit';
import { slugFromPath } from '#lib/utils/posts.js';

const posts = Object.fromEntries(
	Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(([path, load]) => [
		slugFromPath(path),
		load
	])
);

export const entries = () => Object.keys(posts).map((post) => ({ post }));

export const load = async ({ params }) => {
	const loadPost = posts[params.post];
	if (!loadPost) error(404, 'Post not found');

	const post = await loadPost();

	return {
		PostContent: post.default,
		meta: post.metadata
	};
};
