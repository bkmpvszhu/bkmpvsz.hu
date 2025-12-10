import { json } from '@sveltejs/kit'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const GET = async ({ params }) => {
	const { category } = params

	try {
		const { posts } = await fetchPosts({ category })

		return json({ posts })
	}

	catch {
		return json(
			{ error: `Could not retrieve ${category} posts.` },
			{ status: 500 }
		)
	}
}
