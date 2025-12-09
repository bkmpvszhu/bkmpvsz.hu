<!-- Renders posts listed by category -->

<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { postsPerPage, siteDescription } from '$lib/config'

	export let data
	const { page, category, totalPosts, posts = [] } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, totalPosts)

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
	<title>Blog - page {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
	<h1>
		{mapCategoryToTitle(category)}
	</h1>
	<Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page"/>

	<PostsList {posts}/>

	<Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page"/>
{:else}
	<h1>Hoppá!</h1>

	<p>Itt nincs semmi</p>

	<a href="/">Vissza a főoldalra</a>
{/if}