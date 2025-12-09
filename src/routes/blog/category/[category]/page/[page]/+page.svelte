<!-- Renders posts listed by category with pagination -->

<script>
	import PaginatedPostsPage from '$lib/components/PaginatedPostsPage.svelte'
	import { getCategoryTitle } from '$lib/utils/categories'

	let { data } = $props()
	let page = $derived(data.page)
	let category = $derived(data.category)
	let totalPosts = $derived(data.totalPosts)
	let posts = $derived(data.posts ?? [])
</script>


<svelte:head>
	<title>Blog - {getCategoryTitle(category)} - page {page}</title>
</svelte:head>

<PaginatedPostsPage
	{posts}
	{page}
	{totalPosts}
	title={getCategoryTitle(category)}
	paginationPath="/blog/category/{category}/page"
/>
