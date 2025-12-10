<!-- Renders posts listed by category -->

<script context="module">
	import { postsPerPage } from '$lib/config'
	import fetchPosts from '$lib/assets/js/fetchPosts'

	export const load = async ({ fetch, params }) => {
		try {
			const page = params.page ? params.page : 1
			const { category } = params

			// Prevents duplication of page 1 as the index page
			if (page <= 1) {
				return {
					status: 301,
					redirect: `/blog/category/${category}`
				}
			}

			let offset = (page * postsPerPage) - postsPerPage

			const totalPostsRes = await fetch('/api/posts/count.json')
			const { total } = await totalPostsRes.json()
			const { posts } = await fetchPosts({ offset, page })

			return {
				status: 200,
				props: {
					posts,
					page,
					category,
					totalPosts: total
				}
			}
		} catch (error) {
			return {
				status: 404,
				error: error.message
			}
		}
	}
</script>


<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let page
	export let category
	export let totalPosts
	export let posts = []

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