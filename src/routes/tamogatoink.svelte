<script>
	const sponsors = [
		{ name: 'Aszinkron Kft.', 			imageSrc: 'http://aszinkron.hu/templates/motif/images/logos/mlogo-s2.png', link: 'http://aszinkron.hu/index.php' },
		{ name: 'Fercom Systems Kft.', 		imageSrc: 'https://fercomsystems.hu/assets/images/fercom-systems-logo.pznlo4-664x258.png', link: 'https://fercomsystems.hu/' },
		{ name: 'Fornetti', 				imageSrc: 'https://media.fornetti.starpage.hu/v3mUS5_Ff_KaO9MzTOYb6JW69RAot4Mw.png', link: 'https://www.fornetti.hu' },
		{ name: 'Furafol Hungary Kft.', 	imageSrc: 'https://furafol.hu/wp-content/uploads/2019/04/cropped-furafol-logo-1-1.png', link: 'https://furafol.hu/' },
		{ name: 'Jonathermál Zrt.', 		imageSrc: 'https://www.jonathermal.hu/images/logo.png', link: 'https://www.jonathermal.hu' },
		{ name: 'Polár-Stúdió Kft.', 		imageSrc: 'http://www.polar-studio.hu/images/logo.jpg', link: 'http://www.polar-studio.hu' },
		{ name: 'Print 2000', 				imageSrc: 'http://www.print2000.hu/css/print_2000_nyomda_kecskemet_logo.svg', link: 'http://www.print2000.hu' },
		{ name: 'Pintérné és Társa Bt.'},
		{ name: 'Halas-Agromark Kft.'},
		{ name: 'Csátalja önkormányzata', link: 'http://csatalja.hu/' },
		{ name: 'Csengőd önkormányzata', link: 'http://csengod.hu/'},
		{ name: 'Csikéria önkormányzata', link: 'http://csikeria.hu/'},
		{ name: 'Dunapataj önkormányzata', link: 'http://dunapataj.hu/'},
		{ name: 'Kecel önkormányzata', link: 'http://kecel.hu/'},
		{ name: 'Kaskantyú önkormányzata', link: 'http://kaskantyu.hu/'},
		{ name: 'Kéleshalom önkormányzata', link: 'http://keleshalom.hu/'},
		{ name: 'Kiskőrös önkormányzata', link: 'http://kiskoros.hu/'},
		{ name: 'Kisszállás önkormányzata', link: 'http://kisszallas.hu/'},
		{ name: 'Kunbaja önkormányzata', link: 'http://kunbaja.hu/'},
		{ name: 'Kunfehértó önkormányzata', link: 'http://kunfeherto.hu/'},
		{ name: 'Lajosmizse önkormányzata',link: 'http://lajosmizse.hu/' },
		{ name: 'Madaras önkormányzata', link: 'http://madaras.hu/'},
		{ name: 'Mátételke önkormányzata', link: 'http://matetelke.hu/'},
		{ name: 'Mélykút önkormányzata', link: 'http://melykut.hu/'},
		{ name: 'Miske önkormányzata', link: 'http://miske.hu/'},
		{ name: 'Petőfiszállás önkormányzata',link: 'http://petofiszallas.hu/'},
		{ name: 'Soltvadkert önkormányzata', link: 'http://soltvadkert.hu/'},
		{ name: 'Sükösd önkormányzata', link: 'http://sukosd.hu/'},
		{ name: 'Szabadszállás önkormányzata', link: 'http://szabadszallas.hu/'},
		{ name: 'Szank önkormányzata', link: 'http://szank.hu/'},
		{ name: 'Tabdi önkormányzata', link: 'http://tabdi.hu/'},
		{ name: 'Tass önkormányzata', link: 'http://tass.hu/'},
		{ name: 'Tázlár önkormányzata', link: 'http://tazlar.hu/'},
		{ name: 'Tompa önkormányzata', link: 'http://tompa.hu/'},
		{ name: 'Újtelek önkormányzata', link: 'http://ujtelek.hu/'},
		{ name: 'Zsana önkormányzata', link: 'http://zsana.hu/'},
		{ name: 'Gátér önkormányzata', link: 'http://gater.hu/'},
		{ name: 'Pálmomostora önkormányzata', link: 'http://palmonostora.hu/'},
		{ name: 'Foktő önkormányzata', link: 'http://fokto.hu/'},
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
		max-width: 150px;
		max-height: 150px;
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
