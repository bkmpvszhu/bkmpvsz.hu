<!-- This dynamic page renders any page at /blog/category/* -->
<!-- TODO: add pagination to this route -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'

	export let data
	const { posts, category } = data

	//TODO: unmaintainable...
	function mapCategoryToTitle(category) {
		switch (category) {
			case 'hirek':
				return 'Hírek'
			case 'ifjusag':
				return 'Ifjúsági események'
			case 'kepzesek':
				return 'Felkészítések, képzések'
			case 'prevencio':
				return 'Drogprevenció'
			default:
				return '';
		}
	}
</script>


<svelte:head>
	<title>BKMPVSZ: {mapCategoryToTitle(category)}</title>
</svelte:head>

<h1>{mapCategoryToTitle(category)}</h1>

{#if posts.length}
	<PostsList {posts}/>
<!--	<Pagination currentPage="1" totalPosts={total} path="/blog/category/{category}/page"/>-->
{:else}
	<p><strong>Hoppá!</strong> Sajnos ebben a kategóriában még nincs egy poszt sem.</p>

	<p><a href="/">Vissza a főoldalra</a></p>
{/if}
