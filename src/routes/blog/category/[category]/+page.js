import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params, fetch }) => {
	const category = params.category
	const options = { category }
	const { posts } = await fetchPosts(options)
	const res = await fetch(`/api/posts/category/${category}/count`)
	const { total } = await res.json()

	return {
		posts,
		category,
		total
	}
}
