<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	export let data
	const { posts, total } = data
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>


<h1>Blog</h1>

<PostsList {posts}/>

<Pagination currentPage={1} totalPosts={total}/>