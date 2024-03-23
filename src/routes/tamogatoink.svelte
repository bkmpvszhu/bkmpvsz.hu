<script>
	const sponsors = [
		{ name: 'Aszinkron Kft.', 			imageSrc: '/logos/aszinkron.png', link: 'http://aszinkron.hu/index.php' },
		{ name: 'Fercom Systems Kft.', 		imageSrc: '/logos/fercom.png', link: 'https://fercomsystems.hu/' },
		{ name: 'Fornetti', 				imageSrc: '/logos/fornetti.png', link: 'https://www.fornetti.hu' },
		{ name: 'Furafol Hungary Kft.', 	imageSrc: '/logos/furafol.png', link: 'https://furafol.hu/' },
		{ name: 'Jonathermál Zrt.', 		imageSrc: '/logos/jonathermal.png', link: 'https://www.jonathermal.hu' },
		{ name: 'Polár-Stúdió Kft.', 		imageSrc: '/logos/polar.png', link: 'http://www.polar-studio.hu' },
		{ name: 'Print 2000', 				imageSrc: '/logos/print.png', link: 'http://www.print2000.hu' },
		{ name: 'Pintérné és Társa Bt.'},
		{ name: 'Halas-Agromark Kft.'},
		{ name: 'Csávoly önkormányzata', 	imageSrc: '/logos/csavoly.jpg', link: 'https://csavoly.hu'},
		{ name: 'Csátalja önkormányzata', imageSrc: '/logos/Flag_of_Csátalja.svg', link: 'http://csatalja.hu/'},
		{ name: 'Csengőd önkormányzata', imageSrc: '/logos/HUN_Csengőd_COA.svg', link: 'http://csengod.hu/'},
		{ name: 'Csikéria önkormányzata', imageSrc: '/logos/HUN_Csikéria_COA.jpg', link: 'http://csikeria.hu/'},
		{ name: 'Dunapataj önkormányzata', imageSrc: '/logos/HUN_Dunapataj_COA.jpg', link: 'http://dunapataj.hu/'},
		{ name: 'Foktő önkormányzata', imageSrc: '/logos/HUN_Foktő_COA.svg', link: 'http://fokto.hu/'},
		{ name: 'Gátér önkormányzata', imageSrc: '/logos/HUN_Gátér_COA.svg', link: 'http://gater.hu/'},
		{ name: 'Kecel önkormányzata', imageSrc: '/logos/Coa_Hungary_Town_Kecel.svg', link: 'http://kecel.hu/'},
		{ name: 'Kaskantyú önkormányzata', imageSrc: '/logos/HUN_Kaskantyú_COA.svg', link: 'http://kaskantyu.hu/'},
		{ name: 'Kéleshalom önkormányzata', imageSrc: '/logos/HUN_Kéleshalom_COA.svg', link: 'http://keleshalom.hu/'},
		{ name: 'Kiskőrös önkormányzata', imageSrc: '/logos/HUN_Kiskőrös_COA.jpg', link: 'http://kiskoros.hu/'},
		{ name: 'Kisszállás önkormányzata', imageSrc: '/logos/HUN_Kisszállás_COA.svg', link: 'http://kisszallas.hu/'},
		{ name: 'Kunbaja önkormányzata', imageSrc: '/logos/HUN_Kunbaja_COA.svg', link: 'http://kunbaja.hu/'},
		{ name: 'Kunfehértó önkormányzata', imageSrc: '/logos/HUN_Kunfehértó_COA.svg', link: 'http://kunfeherto.hu/'},
		{ name: 'Lajosmizse önkormányzata', imageSrc: '/logos/HUN_Kéleshalom_COA.svg', link: 'http://lajosmizse.hu/' },
		{ name: 'Madaras önkormányzata', imageSrc: '/logos/HUN_Lajosmizse_COA.jpg', link: 'http://madaras.hu/'},
		{ name: 'Mátételke önkormányzata', imageSrc: '/logos/HUN_Mátételke_COA.svg', link: 'http://matetelke.hu/'},
		{ name: 'Mélykút önkormányzata', imageSrc: '/logos/HUN_Mélykút_COA.jpg', link: 'http://melykut.hu/'},
		{ name: 'Miske önkormányzata', imageSrc: '/logos/Miske_címere.jpg', link: 'http://miske.hu/'},
		{ name: 'Petőfiszállás önkormányzata', imageSrc: '/logos/HUN_Petőfiszállás_COA.svg', link: 'http://petofiszallas.hu/'},
		{ name: 'Soltvadkert önkormányzata', imageSrc: '/logos/HUN_Soltvadkert_COA.jpg', link: 'http://soltvadkert.hu/'},
		{ name: 'Sükösd önkormányzata', imageSrc: '/logos/HUN_Sükösd_COA.jpg', link: 'http://sukosd.hu/'},
		{ name: 'Szabadszállás önkormányzata', imageSrc: '/logos/HUN_Szabadszállás_COA.jpg', link: 'http://szabadszallas.hu/'},
		{ name: 'Szank önkormányzata', imageSrc: '/logos/HUN_Szank_COA.svg', link: 'http://szank.hu/'},
		{ name: 'Tabdi önkormányzata', imageSrc: '/logos/HUN_Tabdi_COA.svg', link: 'http://tabdi.hu/'},
		{ name: 'Tass önkormányzata', imageSrc: '/logos/HUN_Tass_COA.svg', link: 'http://tass.hu/'},
		{ name: 'Tázlár önkormányzata', imageSrc: '/logos/HUN_Tázlár_COA.jpg', link: 'http://tazlar.hu/'},
		{ name: 'Tompa önkormányzata', imageSrc: '/logos/Flag_of_Tompa.svg', link: 'http://tompa.hu/'},
		{ name: 'Újtelek önkormányzata', imageSrc: '/logos/HUN_Újtelek_COA.svg.png', link: 'http://ujtelek.hu/'},
		{ name: 'Pálmomostora önkormányzata', imageSrc: '/logos/HUN_Pálmonostora_COA.svg', link: 'http://palmonostora.hu/'},
		{ name: 'Zsana önkormányzata', imageSrc: '/logos/HUN_Zsana_COA.svg', link: 'http://zsana.hu/'},
	];
</script>

<h1> Támogatóink </h1>

<div class="container">
	{#each sponsors as sponsor}
		<a class="card" href={sponsor.link} target="_blank">
			{#if sponsor.imageSrc}
				<img src={sponsor.imageSrc} alt="logo">
			{/if}
			<p> {sponsor.name} </p>
		</a>
	{/each}
</div>

<style>
	p {
		margin-top: 0rem;
		margin-bottom: 0rem;
	}

	img {
		max-width: 125px;
		max-height: 125px;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		padding: 0.5rem;
		margin-bottom: 2rem;
		border-radius: 15px;
		background: white;
		width: 11rem;
		height: 11rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
	}

	.card p {
		margin-top: 1rem;
		font-weight: bold;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
</style>
