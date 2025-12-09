export const load = async ({ fetch }) => {
	const postRes = await fetch(`/api/posts`)
	const { posts } = await postRes.json()

	const totalRes = await fetch(`/api/posts/count`)
	const { total } = await totalRes.json()

	return {
		posts,
		total
	}
}
