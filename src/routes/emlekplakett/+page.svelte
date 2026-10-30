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
				'Gyetvai István János (posztomusz)',
				'Lakatos Tamás',
				'Szekeres Vendelné'
			]
		},
		{ year: 2014, names: ['Farkasné Fazekas Mária', 'Vágó József'] },
		{ year: 2013, names: ['Hajzer László', 'Szatmári Imre'] }
	];
</script>

<h1>Benke László Emlékplakett</h1>

<div class="intro">
	<div class="column" style="margin-right: 1rem">
		<p>
			A Szövetség 2013-ban alapította a Benke László Emlékplakettet, melyet azoknak ítél oda, akik
			elhívatottságukkal és önzetlen munkájukkal szolgálják közös ügyünket.
		</p>

		<p>
			Benke László (1929-2008) a Bács-Kiskun Vármegyei Polgári Védelmi Szövetség alapító tagja volt,
			egyben a szövetség Kiskunhalasi Csoportjának vezetője, aki a kezdetektől a haláláig
			elévülhetetlen szerepet töltött be szervezetünkben. Emberségből, tisztességből és
			szakmaiságból egyaránt felülírhatatlan mércét állított mindannyiunknak.
		</p>

		<p>
			Emléke tiszteletére alapítottuk a Benke László Emlékplakettet, melyet a Szövetség azoknak ítél
			oda, akik elhívatottságukkal és önzetlen munkájukkal szolgálják közös ügyünket.
		</p>
	</div>
	<img src="/images/benke.jpeg" alt="emlék érme" class="column" />
</div>

<h2>Díjazottaink</h2>

{#each awards as award (award.year)}
	<h3>{award.year}</h3>
	<ul>
		{#each award.names as name (name)}
			<li>{name}</li>
		{/each}
	</ul>
{/each}

<style>
	.intro {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}

	.column {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	img {
		height: 600px;
		width: 200px;
	}

	p {
		text-align: justify;
	}

	h1 {
		font-size: 3rem;
	}

	h3 {
		margin-top: 3rem;
	}
</style>
