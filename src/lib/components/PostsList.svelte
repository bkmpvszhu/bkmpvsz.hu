<script>
	import { formatDate } from '#lib/utils/date.js';

	let { posts = [], lead = false, heading = 'h2' } = $props();
</script>

<ul class="posts-list">
	{#each posts as post, i (post.slug)}
		<li class:lead={lead && i === 0}>
			<article>
				<a href="/blog/{post.slug}">
					<img
						src={post.coverImage}
						alt=""
						class:scale-down={post.scaleDown}
						loading={lead && i === 0 ? 'eager' : 'lazy'}
					/>
					<svelte:element this={heading} class="post-title">{post.title}</svelte:element>
				</a>
				<time datetime={new Date(post.date).toISOString()}>{formatDate(post.date)}</time>
				{#if post.excerpt}
					<p>{post.excerpt}</p>
				{/if}
			</article>
		</li>
	{/each}
</ul>

<style>
	.posts-list {
		list-style-type: none;
		max-width: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 2.5rem 2rem;

		@media (min-width: 600px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	li {
		margin: 0;
		min-width: 0;
	}

	/* On two columns the lead only spans the row when that keeps the rows even */
	@media (min-width: 600px) {
		.lead:nth-last-child(odd) {
			grid-column: span 2;
		}
	}

	@media (min-width: 1024px) {
		.lead,
		.lead:nth-last-child(odd) {
			grid-column: span 2;
			grid-row: span 2;
		}
	}

	a {
		display: block;
		color: inherit;
		text-decoration: none;

		&:hover {
			color: var(--red);
		}

		&:hover :global(.post-title) {
			color: inherit;
			text-decoration: underline;
			text-decoration-thickness: 2px;
			text-underline-offset: 0.12em;
		}
	}

	img {
		aspect-ratio: 3 / 2;
		object-fit: cover;
		background: var(--stone);
	}

	img.scale-down {
		object-fit: contain;
	}

	a :global(.post-title) {
		margin: 0.85rem 0 0.25rem;
		font-size: 1.5rem;
		line-height: 1.08;
		text-wrap: pretty;
	}

	.lead a :global(.post-title) {
		font-size: clamp(1.7rem, 3.2vw, 2.5rem);
		line-height: 1.02;
	}

	time {
		font-family: var(--headingFont);
		font-weight: 600;
		color: var(--muted);
	}

	p {
		margin: 0.4rem 0 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		overflow: hidden;
	}

	.lead p {
		-webkit-line-clamp: 5;
		line-clamp: 5;
	}
</style>
