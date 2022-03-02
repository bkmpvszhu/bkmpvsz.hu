<script>
	export let posts = []
</script>

<ul class="posts-list">
	{#each posts as post}
		<li class="card">
			<article>
				<a href="/blog/{post.slug}">
					<img
							src={post.coverImage}
							alt=""
							width={post.coverWidth}
							height={post.coverHeight}
							style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<h2>
						{post.title}
					</h2>
					<span class="subtitle">{post.date}</span>
					<span class="subtitle">{(new Date(post.date)).toLocaleDateString('hu')}</span>
				</a>
			</article>

			{#if post.excerpt}
				<p>{post.excerpt}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		padding: 1rem;
		margin-bottom: 2rem;
		border-radius: 15px;
		background: white;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	img {
		height: 400px;
		width: 100%;
		object-fit: cover;
	}

	a {
		text-decoration: none;
	}
</style>
