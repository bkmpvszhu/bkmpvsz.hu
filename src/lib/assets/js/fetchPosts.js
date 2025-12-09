import { postsPerPage } from '$lib/config'

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
  let posts = await Promise.all(
    Object.entries(import.meta.glob('$lib/posts/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = path.split('/').pop().slice(0, -3)
      return { ...metadata, slug }
    })
  )

  posts = posts.filter(p => !isNaN(new Date(p.date).getTime()))

  // Separate pinned posts - they should always be shown regardless of pagination
  let pinnedPosts = posts.filter(p => p.pinned)
  let regularPosts = posts.filter(p => !p.pinned)

  // Apply category filter to both pinned and regular posts
  if (category) {
    pinnedPosts = pinnedPosts.filter(post => post.categories?.includes(category))
    regularPosts = regularPosts.filter(post => post.categories?.includes(category))
  }

  // Sort regular posts by date
  let sortedPosts = regularPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }

  if (limit && limit < sortedPosts.length && limit !== -1) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  // Only include pinned posts on the first page (when offset is 0 or not provided)
  if (!offset) {
    sortedPosts = [...pinnedPosts, ...sortedPosts]
  }

  sortedPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverWidth: post.coverWidth, 
    coverHeight: post.coverHeight,
    date: post.date,
    categories: post.categories,
    pinned: post.pinned,
    scaleDown: post.scaleDown,
  }))

  return {
    posts: sortedPosts
  }
}

export default fetchPosts