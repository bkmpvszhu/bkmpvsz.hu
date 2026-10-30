<script>
	import { postsPerPage } from '#lib/config.js';

	let { currentPage, totalPosts, path } = $props();

	let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage));

	const isCurrentPage = (page) => page === currentPage;
</script>

{#if pagesAvailable > 1}
	<nav aria-label="Pagination navigation" class="pagination">
		<ul>
			{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page (page)}
				<li>
					<a href="{path}/{page}" aria-current={isCurrentPage(page)}>
						<span class="sr-only">
							{#if isCurrentPage(page)}
								Jelenlegi oldal:
							{:else}
								Ugrás az oldalra
							{/if}
						</span>
						{page}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.pagination {
		display: flex;
		justify-content: center;
		margin: 3rem 0;
	}

	.pagination ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.pagination li {
		margin: 0;
	}

	.pagination a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2em;
		min-width: 2.5rem;
		height: 2.5rem;
		padding: 0.5rem;
		background: white;
		border: 1px solid rgba(66, 110, 76, 0.3);
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-sm);
		transition: all var(--transition-base);
		text-decoration: none;
		color: var(--dark-text);
		font-family: var(--primaryFont);
		font-weight: 500;
		line-height: 1;
	}

	.pagination a:hover {
		background: var(--accent);
		color: var(--white);
		border-color: var(--accent);
		box-shadow: var(--shadow-base);
		transform: translateY(-1px);
	}

	.pagination a[aria-current='true'] {
		background: var(--primary-green);
		color: white;
		border-color: var(--accent);
		box-shadow: var(--shadow-base);
	}
</style>
