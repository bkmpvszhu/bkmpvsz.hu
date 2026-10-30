<script>
	import Icon from '#lib/components/Icon.svelte';
	import { postsPerPage } from '#lib/config.js';

	let { currentPage, totalPosts, path } = $props();

	let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage));

	// First, last and the current page's neighbours, with null marking a gap
	let pages = $derived.by(() => {
		const shown = [
			...new Set([1, currentPage - 1, currentPage, currentPage + 1, pagesAvailable])
		].filter((page) => page >= 1 && page <= pagesAvailable);

		return shown.flatMap((page, i) => (i && page - shown[i - 1] > 1 ? [null, page] : [page]));
	});

	const isNeighbour = (page) => Math.abs(page - currentPage) === 1;
</script>

{#if pagesAvailable > 1}
	<nav aria-label="Lapozás" class="pagination">
		<ul>
			{#if currentPage > 1}
				<li>
					<a href="{path}/{currentPage - 1}" aria-label="Előző oldal">
						<Icon name="chevron-left" />
					</a>
				</li>
			{/if}
			{#each pages as page, i (page ?? `gap-${i}`)}
				{#if page === null}
					<li class="gap" aria-hidden="true">…</li>
				{:else}
					<li class:neighbour={isNeighbour(page) && page !== 1 && page !== pagesAvailable}>
						<a href="{path}/{page}" aria-current={page === currentPage ? 'page' : undefined}>
							<span class="sr-only">
								{page === currentPage ? 'Jelenlegi oldal:' : 'Ugrás az oldalra'}
							</span>
							{page}
						</a>
					</li>
				{/if}
			{/each}
			{#if currentPage < pagesAvailable}
				<li>
					<a href="{path}/{currentPage + 1}" aria-label="Következő oldal">
						<Icon name="chevron-right" />
					</a>
				</li>
			{/if}
		</ul>
	</nav>
{/if}

<style>
	.pagination {
		margin-top: 3rem;
		font-family: var(--headingFont);
		font-weight: 700;
		font-size: 1.15rem;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		list-style: none;
		max-width: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0;
	}

	/* Keeps the row on one line on phones */
	@media (max-width: 479px) {
		.neighbour {
			display: none;
		}
	}

	.gap {
		padding-inline: 0.25rem;
		color: var(--muted);
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: var(--touch-target-min);
		height: var(--touch-target-min);
		color: var(--ink);
		text-decoration: none;

		&:hover {
			color: var(--red);
		}
	}

	a[aria-current='page'] {
		background: var(--green);
		color: var(--white);
	}
</style>
