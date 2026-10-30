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

	<div class:side-columns={sideIntro} class:wide-right={sideIntro}>
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
	.wide-right {
		--right-column: 2fr;
	}
</style>
