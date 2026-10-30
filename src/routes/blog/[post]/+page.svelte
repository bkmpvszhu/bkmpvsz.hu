<script>
	import { formatDate } from '#lib/utils/date.js';

	let { data } = $props();
	let { PostContent, meta } = $derived(data);
	let { title, excerpt, date, coverImage } = $derived(meta);
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
	<h1>{title}</h1>

	<time datetime={new Date(date).toISOString()}>{formatDate(date)}</time>

	<img class="cover-image" src={coverImage} alt="" />

	<div class="content">
		<PostContent />
	</div>

	<button onclick={() => history.back()}>Vissza</button>
</article>

<style>
	.post {
		max-width: 56rem;
	}

	h1 {
		margin-bottom: 0.75rem;
	}

	time {
		display: block;
		font-family: var(--headingFont);
		font-weight: 600;
		font-size: 1.1rem;
		color: var(--muted);
	}

	/* Covers may be posters, so show them whole rather than cropping */
	.cover-image {
		margin-top: 1.5rem;
		max-height: 75vh;
		object-fit: contain;
		background: var(--stone);
	}

	.content {
		margin-top: 2rem;
		max-width: 68ch;
	}

	.content :global(img) {
		margin-block: 1.5rem;
	}

	button {
		margin: 2rem 0 0;
		padding: 0;
		min-height: var(--touch-target-min);
		border: 0;
		background: none;
		color: var(--green);
		font-family: var(--headingFont);
		font-weight: 700;
		font-size: 1.15rem;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.15em;
		cursor: pointer;

		&:hover {
			color: var(--red);
		}
	}
</style>
