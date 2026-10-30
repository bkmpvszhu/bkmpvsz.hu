<script>
	import PostsList from '#lib/components/PostsList.svelte';
	import Pagination from '#lib/components/Pagination.svelte';

	let { posts = [], page, totalPosts, title, paginationPath, children } = $props();
</script>

{#if posts.length}
	<h1>{title}</h1>

	{@render children?.()}

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} path={paginationPath} />
{:else}
	<h1>Hoppá!</h1>

	<p>Itt nincs semmi</p>

	<a href="/">Vissza a főoldalra</a>
{/if}
