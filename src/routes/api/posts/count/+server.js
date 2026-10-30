import { json } from '@sveltejs/kit'

export const GET = async () => {
	try {
		const posts = import.meta.glob(`/src/lib/posts/*.md`)

		return json({
			total: Object.keys(posts).length
		})
	}

	catch {
		return json(
			{ error: 'Could not retrieve total number of posts.' },
			{ status: 500 }
		)
	}
}
