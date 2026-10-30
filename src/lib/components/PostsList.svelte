<script>
	import { formatDate } from '#lib/utils/date.js';

	let { posts = [], heading = 'h2' } = $props();
</script>

<ul class="posts-list">
	{#each posts as post, i (post.slug)}
		<li>
			<article>
				<a href="/blog/{post.slug}" tabindex="-1" aria-hidden="true">
					<img
						src={post.coverImage}
						alt=""
						class:scale-down={post.scaleDown}
						loading={i === 0 ? 'eager' : 'lazy'}
					/>
				</a>
				<div>
					<time datetime={new Date(post.date).toISOString()}>{formatDate(post.date)}</time>
					<svelte:element this={heading} class="post-title">
						<a href="/blog/{post.slug}">{post.title}</a>
					</svelte:element>
					{#if post.excerpt}
						<p>{post.excerpt}</p>
					{/if}
				</div>
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
		border-bottom: 1px solid var(--line);
	}

	li {
		margin: 0;
		padding-block: 1.5rem;
		border-top: 1px solid var(--line);
	}

	article {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 0.85rem 2rem;

		@media (min-width: 600px) {
			grid-template-columns: 13rem minmax(0, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: 17rem minmax(0, 1fr);
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

	time {
		font-family: var(--headingFont);
		font-weight: 600;
		color: var(--muted);
	}

	article :global(.post-title) {
		margin: 0.1rem 0 0.4rem;
		font-size: clamp(1.45rem, 2.4vw, 1.8rem);
		line-height: 1.08;
		text-wrap: pretty;
	}

	article :global(.post-title a) {
		color: var(--ink);
		text-decoration: none;
	}

	article :global(.post-title a:hover) {
		color: var(--red);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 0.12em;
	}

	p {
		margin: 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		overflow: hidden;
	}
</style>
