<!-- This dynamic page renders any page at /blog/category/* -->
<!-- TODO: add pagination to this route -->
<script context="module">
	import fetchPosts from '$lib/assets/js/fetchPosts'

	export const load = async ({ params, fetch }) => {
		const category = params.category
		const options = { category }
		const { posts } = await fetchPosts(options)
		const res = await fetch(`/api/posts/category/${category}/count.json`)
		const { total } = await res.json()

		return {
			props: {
				posts,
				category,
				total
			}
		}
	}
</script>

<script>
	import PostsList from '$lib/components/PostsList.svelte'

	export let posts
	export let category

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
