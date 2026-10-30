<script>
	import PostsList from '#lib/components/PostsList.svelte';
	import { siteName, siteDescription } from '#lib/config.js';
	import { categories } from '#lib/utils/categories.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<h1 class="sr-only">{siteName}</h1>

<section class="hero full-bleed">
	<img
		src="/images/2026-10-11-1.jpg"
		alt="A Petőfi Mentőcsoport tagjai a Tisza partján, a 2026. októberi gyakorlaton"
		fetchpriority="high"
	/>
	<p class="quote">
		„Az emberi élet és a környezetünk védelme mindannyiunk közös ügye, és ezért tenni is muszáj!”
	</p>
</section>

<section class="news">
	<div class="news-heading">
		<h2>Legfrissebb hírek</h2>
		<a href="/blog/category/hirek">Összes hír</a>
	</div>
	<PostsList posts={data.posts} lead heading="h3" />
</section>

<section class="about full-bleed">
	<div class="about-inner">
		<div>
			<h2>Magunkról</h2>
			<p>
				A Szövetség tevékenységével aktívan közreműködik a megye polgárainak polgári védelmi és
				katasztrófavédelmi felkészítésében, védelmük szervezésében. Szervezetünk elhatárolódik
				minden politikai tevékenységtől.
			</p>
			<p><a href="/magunkrol">Bemutatkozásunk</a></p>
		</div>
		<div>
			<h2>Tevékenységeink</h2>
			<ul class="link-list">
				{#each Object.entries(categories) as [slug, title] (slug)}
					<li><a href="/blog/category/{slug}">{title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="support">
	<h2>Támogatóink</h2>
	<p>
		Munkánk nem öncélú. Számos támogatónk (magánemberek, önkormányzatok, gazdálkodó szervezetek)
		van, akik azonosulnak céljainkkal, és hozzásegítenek eredményes működésünkhöz.
	</p>
	<p><a href="/tamogatoink">Támogatóink listája</a></p>
</section>

<style>
	.hero {
		margin-top: calc(var(--main-space) * -1);

		img {
			height: clamp(14rem, min(48vh, 66vw), 36rem);
			object-fit: cover;
			object-position: center 62%;
		}
	}

	.quote {
		max-width: calc(var(--page) + 2 * var(--gutter));
		margin: 1.5rem auto 0;
		padding-inline: var(--gutter);
		font-family: var(--headingFont);
		font-weight: 800;
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 1;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	.news {
		margin-top: 4rem;
	}

	.news-heading {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 0 1rem;
		margin-bottom: 1.5rem;

		h2 {
			margin: 0;
		}

		a {
			font-family: var(--headingFont);
			font-weight: 700;
			font-size: 1.15rem;
		}
	}

	.about {
		margin-top: 4rem;
		background: var(--stone);
	}

	.about-inner {
		display: grid;
		gap: 2.5rem 4rem;
		max-width: calc(var(--page) + 2 * var(--gutter));
		margin-inline: auto;
		padding: 3.5rem var(--gutter);

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}

		h2 {
			margin-top: 0;
		}
	}

	.support {
		margin-top: 4rem;

		h2 {
			margin-top: 0;
		}
	}
</style>
