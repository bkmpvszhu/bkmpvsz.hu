<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->

<script context="module">
	export const load = async ({ params }) => {
		try {
			const post = await import(`../../lib/posts/${params.post}.md`)

			return {
				props: {
					PostContent: post.default,
					meta: { ...post.metadata, slug: params.post }
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
	export let PostContent
	export let meta

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = meta
</script>


<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article"/>
	<meta property="og:title" content={title}/>
	<meta name="twitter:title" content={title}/>
	<meta property="og:description" content={excerpt}/>
	<meta name="twitter:description" content={excerpt}/>
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth}/>
	<meta property="og:image:height" content={coverHeight}/>
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
			class="cover-image"
			src="{coverImage}"
			alt=""
			style="aspect-ratio: {coverWidth} / {coverHeight};"
			width={coverWidth}
			height={coverHeight}
	/>

	<h1>{ title }</h1>

	<div class="meta">
		<b>Megjelent:</b> {date}
	</div>

	<svelte:component this={PostContent}/>

	<button on:click={() => history.back()}>
		Vissza
	</button>
</article>

<style>
	article :global(p) {
		text-align: justify;
	}
</style>