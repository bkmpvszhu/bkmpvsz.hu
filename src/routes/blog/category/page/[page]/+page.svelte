<!-- Renders posts listed by category -->

<script>
  import PostsList from '#lib/components/PostsList.svelte'
  import Pagination from '#lib/components/Pagination.svelte'
  import { postsPerPage, siteDescription } from '#lib/config.js'

  export let data
  const { page, totalPosts, posts = [] } = data

  const lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
  const upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
  <h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
  <Pagination currentPage={page} {totalPosts} />

  <PostsList {posts} />

  <Pagination currentPage={page} {totalPosts} />
{:else}
	<p><strong>Hoppá!</strong> Sajnos ebben a kategóriában még nincs egy poszt sem.</p>

	<p><a href="/">Vissza a főoldalra</a></p>
{/if}