<script>
	import { sponsors } from '#lib/sponsors.js';
	import { prefersReducedMotion } from 'svelte/motion';

	const withLogos = sponsors.filter((sponsor) => sponsor.imageSrc);

	// Tabbing scrolls the clipped row to the focused link, so put it back for the animation
	const resetScroll = ({ currentTarget, relatedTarget }) => {
		if (!prefersReducedMotion.current && !currentTarget.contains(relatedTarget)) {
			currentTarget.scrollLeft = 0;
		}
	};
</script>

<!-- The list is rendered twice and moved by half its width, so it loops with no jump. -->
<div class="carousel" onfocusout={resetScroll}>
	<div class="track">
		{#each [false, true] as isCopy (isCopy)}
			<ul class:copy={isCopy} aria-hidden={isCopy ? 'true' : undefined}>
				{#each withLogos as sponsor (sponsor.name)}
					<li>
						<a
							href={sponsor.link}
							target="_blank"
							rel="noopener"
							tabindex={isCopy ? -1 : undefined}
						>
							<img src={sponsor.imageSrc} alt="{sponsor.name} logója" />
						</a>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>

<style>
	.carousel {
		overflow: hidden;
		scroll-padding-inline: 9rem;
	}

	.track {
		display: flex;
		width: max-content;
		animation: scroll 110s linear infinite;

		&:hover,
		&:focus-within {
			animation-play-state: paused;
		}

		/* A moved link could sit out of reach to the left, so keyboard users get the row at rest */
		&:has(a:focus-visible) {
			animation: none;
		}
	}

	ul {
		list-style-type: none;
		display: flex;
		max-width: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 8.5rem;
		height: 7.5rem;
		padding: 0.5rem 1rem;
		outline-offset: -3px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@keyframes scroll {
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.carousel {
			overflow-x: auto;
		}

		.track {
			animation: none;
		}

		.copy {
			display: none;
		}
	}
</style>
