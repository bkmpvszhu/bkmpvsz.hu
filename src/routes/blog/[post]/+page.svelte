<script>
	import { formatDate } from '#lib/utils/date.js';

	let { data } = $props();
	let PostContent = $derived(data.PostContent);
	let meta = $derived(data.meta);
	let title = $derived(meta.title);
	let excerpt = $derived(meta.excerpt);
	let date = $derived(meta.date);
	let coverImage = $derived(meta.coverImage);
</script>

<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
</svelte:head>

<article class="post">
	<img class="cover-image" src={coverImage} alt="" />

	<h1>{title}</h1>

	<div class="meta">
		<b>Megjelent:</b>
		{formatDate(date)}
	</div>

	<PostContent />

	<button onclick={() => history.back()}> Vissza </button>
</article>

<style>
	article :global(p) {
		text-align: justify;
	}
</style>
