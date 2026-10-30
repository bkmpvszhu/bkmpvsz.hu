<script>
	const awards = [
		{ year: 2026, names: ['Békési Attila'] },
		{ year: 2025, names: ['Szalka Zoltánné'] },
		{ year: 2024, names: ['Péjó Lajos'] },
		{ year: 2023, names: ['Polgár Pál'] },
		{ year: 2022, names: ['Rausch Sándor (posztumusz)'] },
		{ year: 2021, names: ['Gödön Sándor'] },
		{ year: 2020, names: ['Kiss Zoltán'] },
		{ year: 2019, names: ['Balatonné Sáfrány Erika', 'Kardosné Magony Mária'] },
		{ year: 2018, names: ['Seresné Farkas Júlia', 'Tóth Árpád'] },
		{ year: 2017, names: ['P. Szabó Károly (posztumusz)', 'Gémes József'] },
		{ year: 2016, names: ['Geiger János nyá. mk. pv. ezredes, főtanácsos', 'Dezső Mihály'] },
		{
			year: 2015,
			names: [
				'Dr. Ferenczi István',
				'Faludi Éva Szidónia',
				'Gyetvai István János (posztumusz)',
				'Lakatos Tamás',
				'Szekeres Vendelné'
			]
		},
		{ year: 2014, names: ['Farkasné Fazekas Mária', 'Vágó József'] },
		{ year: 2013, names: ['Hajzer László', 'Szatmári Imre'] }
	];
</script>

<svelte:head>
	<title>BKMPVSZ: Benke László Emlékplakett</title>
</svelte:head>

<h1>Benke László Emlékplakett</h1>

<div class="intro">
	<div>
		<p>
			A Szövetség 2013-ban alapította a Benke László Emlékplakettet, melyet azoknak ítél oda, akik
			elhívatottságukkal és önzetlen munkájukkal szolgálják közös ügyünket.
		</p>

		<p>
			Benke László (1929-2008) a Bács-Kiskun Megyei Polgári Védelmi Szövetség alapító tagja volt,
			egyben a szövetség Kiskunhalasi Csoportjának vezetője, aki a kezdetektől a haláláig
			elévülhetetlen szerepet töltött be szervezetünkben. Emberségből, tisztességből és
			szakmaiságból egyaránt felülírhatatlan mércét állított mindannyiunknak.
		</p>

		<p>
			Emléke tiszteletére alapítottuk a Benke László Emlékplakettet, melyet a Szövetség azoknak ítél
			oda, akik elhívatottságukkal és önzetlen munkájukkal szolgálják közös ügyünket.
		</p>
	</div>
	<img src="/images/benke.jpeg" alt="A Benke László Emlékplakett" />
</div>

<h2>Díjazottaink</h2>

<dl>
	{#each awards as award (award.year)}
		<div>
			<dt>{award.year}</dt>
			<dd>
				{#each award.names as name (name)}
					<span>{name}</span>
				{/each}
			</dd>
		</div>
	{/each}
</dl>

<style>
	.intro {
		display: grid;
		gap: 2rem 4rem;

		@media (min-width: 768px) {
			grid-template-columns: minmax(0, 68ch) 16rem;
		}

		p:first-child {
			margin-top: 0;
		}
	}

	img {
		max-width: 16rem;
	}

	dl {
		max-width: 44rem;
		margin: 0;

		div {
			display: grid;
			grid-template-columns: 4.5rem 1fr;
			gap: 1rem;
			padding-block: 0.6rem;
			border-top: 1px solid var(--line);
		}
	}

	dt {
		font-family: var(--headingFont);
		font-weight: 800;
		font-size: 1.2rem;
	}

	dd {
		margin: 0;

		span {
			display: block;
		}
	}
</style>
