import fetchPosts from '#lib/assets/js/fetchPosts.js'

export const load = async () => {
	const { posts } = await fetchPosts()

	// Count all posts
	const allPosts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			return metadata
		})
	)
	const total = allPosts.filter(p => !isNaN(new Date(p.date).getTime())).length

	return {
		posts,
		total
	}
}
