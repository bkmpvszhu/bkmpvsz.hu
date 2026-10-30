<script>
	import PaginatedPostsPage from '#lib/components/PaginatedPostsPage.svelte';
	import PrevencioIntro from '#lib/components/PrevencioIntro.svelte';
	import { categories } from '#lib/utils/categories.js';

	let { data } = $props();
	let { posts, category, total } = $derived(data);
</script>

<svelte:head>
	<title>BKMPVSZ: {categories[category]}</title>
</svelte:head>

<PaginatedPostsPage
	{posts}
	page={1}
	totalPosts={total}
	title={categories[category]}
	paginationPath="/blog/category/{category}/page"
	intro={category === 'prevencio' ? PrevencioIntro : undefined}
/>
