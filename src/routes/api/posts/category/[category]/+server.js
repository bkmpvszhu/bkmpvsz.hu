import fetchPosts from '#lib/assets/js/fetchPosts.js'

export const GET = async ({ params }) => {
	const { category } = params

	try {
		const { posts } = await fetchPosts({ category })

		return Response.json({ posts })
	}

	catch {
		return Response.json(
			{ error: `Could not retrieve ${category} posts.` },
			{ status: 500 }
		)
	}
}
