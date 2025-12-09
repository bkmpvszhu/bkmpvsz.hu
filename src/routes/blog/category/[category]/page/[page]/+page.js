import { redirect, error } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ fetch, params }) => {
	try {
		const page = params.page ? parseInt(params.page) : 1
		const { category } = params

		// Prevents duplication of page 1 as the index page
		if (page <= 1) {
			throw redirect(301, `/blog/category/${category}`)
		}

		let offset = (page * postsPerPage) - postsPerPage

		const totalPostsRes = await fetch(`/api/posts/category/${category}/count`)
		const { total } = await totalPostsRes.json()
		const { posts } = await fetchPosts({ offset, page, category })

		return {
			posts,
			page,
			category,
			totalPosts: total
		}
	} catch (err) {
		if (err.status === 301) throw err
		throw error(404, err.message)
	}
}
