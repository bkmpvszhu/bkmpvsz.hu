<script>
	import { sponsors } from '#lib/sponsors.js';
</script>

<svelte:head>
	<title>BKMPVSZ: Támogatóink</title>
</svelte:head>

<h1>Támogatóink</h1>

<ul class="sponsors">
	{#each sponsors as sponsor (sponsor.name)}
		<li>
			<svelte:element
				this={sponsor.link ? 'a' : 'div'}
				class="sponsor"
				href={sponsor.link}
				target={sponsor.link ? '_blank' : undefined}
				rel={sponsor.link ? 'noopener' : undefined}
			>
				{#if sponsor.imageSrc}
					<img src={sponsor.imageSrc} alt="{sponsor.name} logója" loading="lazy" />
				{/if}
				<span>{sponsor.name}</span>
			</svelte:element>
		</li>
	{/each}
</ul>

<style>
	.sponsors {
		list-style-type: none;
		max-width: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
		gap: 2.5rem 1.5rem;
	}

	li {
		margin: 0;
	}

	:global(.sponsor) {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		text-align: center;
		font-family: var(--headingFont);
		font-weight: 600;
		line-height: 1.15;
		text-decoration: none;
	}

	img {
		height: 6rem;
		object-fit: contain;
	}
</style>
