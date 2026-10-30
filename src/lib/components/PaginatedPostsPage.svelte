<script>
	import PostsList from '#lib/components/PostsList.svelte';
	import Pagination from '#lib/components/Pagination.svelte';

	let {
		posts = [],
		page,
		totalPosts,
		title,
		paginationPath,
		sideIntro = false,
		children
	} = $props();
</script>

{#if posts.length}
	<h1>{title}</h1>

	<div class:columns={sideIntro}>
		{@render children?.()}

		<div>
			<PostsList {posts} />

			<Pagination currentPage={page} {totalPosts} path={paginationPath} />
		</div>
	</div>
{:else}
	<h1>Hoppá!</h1>

	<p>Itt nincs semmi</p>

	<a href="/">Vissza a főoldalra</a>
{/if}

<style>
	.columns {
		@media (min-width: 1024px) {
			display: grid;
			grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
			gap: 3.5rem;
			align-items: start;
		}
	}
</style>
