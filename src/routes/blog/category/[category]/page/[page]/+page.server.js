import { getPostsPage, parsePage } from '#lib/server/posts.js';

export const load = ({ params }) => {
	const { category } = params;
	const page = parsePage(params.page, `/blog/category/${category}`);

	return { page, category, ...getPostsPage({ page, category }) };
};
