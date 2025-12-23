import { json } from '@sveltejs/kit'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const GET = async ({ params }) => {
	const { category } = params
	const options = { category, limit: -1 }

	try {
		const { posts } = await fetchPosts(options)

		return json({
			total: posts.length
		})
	}

	catch {
		return json(
			{ error: `Could not retrieve total number of ${category} posts.` },
			{ status: 500 }
		)
	}
}
