<script>
	import PaginatedPostsPage from '#lib/components/PaginatedPostsPage.svelte';
	import { categories } from '#lib/utils/categories.js';

	let { data } = $props();
	let page = $derived(data.page);
	let category = $derived(data.category);
	let total = $derived(data.total);
	let posts = $derived(data.posts);
</script>

<svelte:head>
	<title>Blog - {categories[category]} - page {page}</title>
</svelte:head>

<PaginatedPostsPage
	{posts}
	{page}
	totalPosts={total}
	title={categories[category]}
	paginationPath="/blog/category/{category}/page"
/>
