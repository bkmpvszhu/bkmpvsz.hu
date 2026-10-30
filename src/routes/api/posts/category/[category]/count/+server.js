import fetchPosts from '#lib/assets/js/fetchPosts.js'

export const GET = async ({ params }) => {
	const { category } = params
	const options = { category, limit: -1 }

	try {
		const { posts } = await fetchPosts(options)

		return Response.json({
			total: posts.length
		})
	}

	catch {
		return Response.json(
			{ error: `Could not retrieve total number of ${category} posts.` },
			{ status: 500 }
		)
	}
}
