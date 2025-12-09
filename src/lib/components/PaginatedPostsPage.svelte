<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage } from '$lib/config'

	let { posts = [], page, totalPosts, title, paginationPath } = $props()

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts))
</script>

{#if posts.length}
	<h1>{title}</h1>
	<Pagination currentPage={page} {totalPosts} path={paginationPath} />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} path={paginationPath} />
{:else}
	<h1>Hoppá!</h1>

	<p>Itt nincs semmi</p>

	<a href="/">Vissza a főoldalra</a>
{/if}

<style>
	h1 {
		text-align: center;
	}

	h1::after {
		width: 50%;
		margin-left: -25%;
		left: 50%;
	}
</style>
