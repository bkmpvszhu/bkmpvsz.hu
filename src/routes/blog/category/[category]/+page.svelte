<!-- This dynamic page renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage } from '$lib/config'
	import { getCategoryTitle } from '$lib/utils/categories'

	let { data } = $props()
	let posts = $derived(data.posts)
	let category = $derived(data.category)
	let total = $derived(data.total)
</script>


<svelte:head>
	<title>BKMPVSZ: {getCategoryTitle(category)}</title>
</svelte:head>

<h1>{getCategoryTitle(category)}</h1>

{#if posts.length}
	<Pagination currentPage={1} totalPosts={total} path="/blog/category/{category}/page"/>
	<PostsList {posts}/>
	<Pagination currentPage={1} totalPosts={total} path="/blog/category/{category}/page"/>
{:else}
	<p><strong>Hoppá!</strong> Sajnos ebben a kategóriában még nincs egy poszt sem.</p>

	<p><a href="/">Vissza a főoldalra</a></p>
{/if}
