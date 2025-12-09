// Configure prerendering for all blog posts

export const entries = () => {
	const posts = import.meta.glob('$lib/posts/*.md', { eager: true })

	return Object.keys(posts).map(path => ({
		post: path.split('/').pop().replace('.md', '')
	}))
}

export const prerender = true
