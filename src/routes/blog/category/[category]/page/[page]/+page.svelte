<!-- Renders posts listed by category -->

<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage, siteDescription } from '$lib/config'
	import { getCategoryTitle } from '$lib/utils/categories'

	let { data } = $props()
	let page = $derived(data.page)
	let category = $derived(data.category)
	let totalPosts = $derived(data.totalPosts)
	let posts = $derived(data.posts ?? [])

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts))
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" content={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
	<h1>
		{getCategoryTitle(category)}
	</h1>
	<Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page"/>

	<PostsList {posts}/>

	<Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page"/>
{:else}
	<h1>Hoppá!</h1>

	<p>Itt nincs semmi</p>

	<a href="/">Vissza a főoldalra</a>
{/if}