import { getPostsPage } from '#lib/server/posts.js';

export const load = () => ({
	posts: getPostsPage({ page: 1, category: 'hirek' }).posts.slice(0, 3)
});
