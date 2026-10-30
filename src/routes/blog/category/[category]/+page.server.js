import { getPostsPage } from '#lib/server/posts.js';

export const load = ({ params }) => {
	const { category } = params;

	return { category, ...getPostsPage({ page: 1, category }) };
};
