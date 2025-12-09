<!-- This file handles any /blog/page/x route for pagination -->

<script>
	import PaginatedPostsPage from '$lib/components/PaginatedPostsPage.svelte'
	import { siteDescription } from '$lib/config'

	let { data } = $props()
	let page = $derived(data.page)
	let totalPosts = $derived(data.totalPosts)
	let posts = $derived(data.posts ?? [])
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<PaginatedPostsPage
	{posts}
	{page}
	{totalPosts}
	title="Posts {(page * 10) - 9}–{Math.min(page * 10, totalPosts)} of {totalPosts}"
	paginationPath="/blog/page"
/>
