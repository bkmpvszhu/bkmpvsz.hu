import { redirect, error } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ fetch, params }) => {
	try {
		const page = params.page ? parseInt(params.page) : 1

		// Keeps from duplicating the blog index route as page 1
		if (page <= 1) {
			throw redirect(301, '/')
		}

		let offset = 0 //(page * postsPerPage) - postsPerPage

		const totalPostsRes = await fetch('/api/posts/count')
		const { total } = await totalPostsRes.json()
		const { posts } = await fetchPosts({ offset, page })

		return {
			posts,
			page,
			totalPosts: total
		}
	} catch(err) {
		if (err.status === 301) throw err
		throw error(404, err.message)
	}
}
