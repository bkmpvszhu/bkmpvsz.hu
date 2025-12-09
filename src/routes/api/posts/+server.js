import { json } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const GET = async ({ url }) => {
	try {
		/**
		 * These let you add query params to change what's retrieved from the endpoint, e.g.,
		 * /api/posts?offset=10&limit=20
		 **/
		const params = new URLSearchParams(url.search)

		const options = {
			offset: parseInt(params.get('offset')) || null,
			limit: parseInt(params.get('limit')) || postsPerPage
		}

		/**
		 * Endpoint uses a utility function for retrieving the posts, because without that,
		 * query parameters wouldn't result in static routes being generated at build time.
		 * It's also a little cleaner in the code.
		 */
		const { posts } = await fetchPosts(options)

		return json({ posts })
	}

	catch(error) {
		return json(
			{ error: 'Could not fetch posts. ' + error },
			{ status: 500 }
		)
	}
}
