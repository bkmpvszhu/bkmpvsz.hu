<script>
	import PaginatedPostsPage from '#lib/components/PaginatedPostsPage.svelte';
	import PrevencioIntro from '#lib/components/PrevencioIntro.svelte';
	import { categories } from '#lib/utils/categories.js';

	let { data } = $props();
	let posts = $derived(data.posts);
	let category = $derived(data.category);
	let total = $derived(data.total);
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
	sideIntro={category === 'prevencio'}
>
	{#if category === 'prevencio'}
		<PrevencioIntro />
	{/if}
</PaginatedPostsPage>
