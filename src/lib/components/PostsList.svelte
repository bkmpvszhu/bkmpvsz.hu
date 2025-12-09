<script>
	import { formatDate } from '$lib/utils/date'

	let { posts = [] } = $props()
</script>

<div class="posts-list-container">
	<ul class="posts-list">
		{#each posts as post}
			<!-- TODO This could be a component-->
			<li class="card">
				<article>
					<a href="/blog/{post.slug}">
						<img
								src={post.coverImage}
								alt=""
								width={post.coverWidth}
								height={post.coverHeight}
								style="ratio: {post.coverWidth} / {post.coverHeight}"
								class:scale-down="{post.scaleDown}"
						/>
						<h2>
							{post.title}
						</h2>
						<span class="subtitle">{formatDate(post.date)}</span>
					</a>
				</article>

				{#if post.excerpt}
					<p>{post.excerpt}</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.posts-list-container {
		@media (min-width: 768px) {
			width: 100vw;
			max-width: 60rem;
			margin-left: 50%;
			transform: translateX(-50%);
			padding: 0 2rem;
		}

		@media (min-width: 1024px) {
			max-width: 75rem;
		}

		@media (min-width: 1280px) {
			max-width: 85rem;
		}
	}

	.posts-list {
		list-style-type: none;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		@media (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.card {
		box-shadow: var(--shadow-base);
		transition: all var(--transition-base);
		padding: 1rem;
		border-radius: var(--radius-card);
		background: white;
		margin-bottom: 0;
	}

	.card:hover {
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	img {
		width: 100%;
		object-fit: cover;
		height: 300px;

		@media (min-width: 768px) {
			height: 350px;
		}

		@media (min-width: 1024px) {
			height: 400px;
		}
	}

	a {
		text-decoration: none;
	}

	img.scale-down {
		object-fit: scale-down;
	}
</style>
