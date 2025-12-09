<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->

<script>
	import { formatDate } from '$lib/utils/date'

	let { data } = $props()
	let PostContent = $derived(data.PostContent)
	let meta = $derived(data.meta)
	let title = $derived(meta.title)
	let excerpt = $derived(meta.excerpt)
	let date = $derived(meta.date)
	let coverImage = $derived(meta.coverImage)
	let coverWidth = $derived(meta.coverWidth)
	let coverHeight = $derived(meta.coverHeight)
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
		<b>Megjelent:</b> {formatDate(date)}
	</div>

	<PostContent />

	<button onclick={() => history.back()}>
		Vissza
	</button>
</article>

<style>
	article :global(p) {
		text-align: justify;
	}
</style>