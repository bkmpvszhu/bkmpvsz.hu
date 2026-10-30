<script>
	import PostsList from '#lib/components/PostsList.svelte';
	import { siteName, siteDescription } from '#lib/config.js';
	import SponsorCarousel from '#lib/components/SponsorCarousel.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<h1 class="sr-only">{siteName}</h1>

<section class="hero">
	<div>
		<p class="quote">
			„Az emberi élet és a környezetünk védelme mindannyiunk közös ügye, és ezért tenni is muszáj!”
		</p>
		<p>
			A Szövetség tevékenységével aktívan közreműködik a megye polgárainak polgári védelmi és
			katasztrófavédelmi felkészítésében, védelmük szervezésében. Szervezetünk elhatárolódik minden
			politikai tevékenységtől.
		</p>
		<p><a href="/magunkrol">Bemutatkozásunk</a></p>
	</div>
	<img
		src="/images/home-hero.jpg"
		alt="A Petőfi Mentőcsoport tagjai homokzsákokkal dolgoznak a Tisza partján, a 2026. októberi gyakorlaton"
		fetchpriority="high"
	/>
</section>

<section class="news">
	<div class="section-heading">
		<h2>Legfrissebb hírek</h2>
		<a href="/blog/category/hirek">Összes hír</a>
	</div>
	<PostsList posts={data.posts} heading="h3" />
</section>

<section class="support full-bleed">
	<div class="support-inner">
		<div class="section-heading">
			<h2>Támogatóink</h2>
			<a href="/tamogatoink">Támogatóink listája</a>
		</div>
		<p>
			Munkánk nem öncélú. Számos támogatónk (magánemberek, önkormányzatok, gazdálkodó szervezetek)
			van, akik azonosulnak céljainkkal, és hozzásegítenek eredményes működésünkhöz.
		</p>
	</div>
	<SponsorCarousel />
</section>

<style>
	.hero {
		display: grid;
		gap: 2rem 3.5rem;
		align-items: center;

		@media (min-width: 900px) {
			grid-template-columns: 1fr 1fr;
		}

		img {
			aspect-ratio: 3 / 2;
			object-fit: cover;
		}
	}

	.quote {
		margin: 0 0 1.25rem;
		font-family: var(--headingFont);
		font-weight: 800;
		font-size: clamp(2rem, 3.6vw, 3rem);
		line-height: 1.02;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	.news {
		margin-top: 3.5rem;
	}

	.section-heading {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 0 1rem;
		margin-bottom: 1rem;

		h2 {
			margin: 0;
		}

		a {
			font-family: var(--headingFont);
			font-weight: 700;
			font-size: 1.15rem;
		}
	}

	.support {
		margin-top: 3.5rem;
		margin-bottom: calc(-1 * var(--main-space));
		padding-block: 2.5rem 3rem;
		background: var(--stone);
	}

	.support-inner {
		max-width: calc(var(--page) + 2 * var(--gutter));
		margin-inline: auto;
		padding-inline: var(--gutter);

		p {
			margin-block: 0 2rem;
		}
	}
</style>
