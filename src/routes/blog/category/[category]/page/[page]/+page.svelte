<script>
	import PaginatedPostsPage from '#lib/components/PaginatedPostsPage.svelte';
	import { categories } from '#lib/utils/categories.js';

	let { data } = $props();
	let { page, category, total, posts } = $derived(data);
</script>

<svelte:head>
	<title>BKMPVSZ: {categories[category]}, {page}. oldal</title>
</svelte:head>

<PaginatedPostsPage
	{posts}
	{page}
	totalPosts={total}
	title={categories[category]}
	paginationPath="/blog/category/{category}/page"
/>
