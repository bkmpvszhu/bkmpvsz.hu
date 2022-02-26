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
		{ name: 'Csikéria önkormányzata',link: 'http://csikeria.hu/'},
		{ name: 'Dunapataj önkormányzata' },
		{ name: 'Kecel önkormányzata' },
		{ name: 'Kaskantyú önkormányzata' },
		{ name: 'Kéleshalom önkormányzata' },
		{ name: 'Kiskőrös önkormányzata' },
		{ name: 'Kisszállás önkormányzata' },
		{ name: 'Kunbaja önkormányzata' },
		{ name: 'Kunfehértó önkormányzata' },
		{ name: 'Lajosmizse önkormányzata' },
		{ name: 'Madaras önkormányzata' },
		{ name: 'Mátételke önkormányzata' },
		{ name: 'Mélykút önkormányzata' },
		{ name: 'Miske önkormányzata' },
		{ name: 'Petőfiszállás önkormányzata' },
		{ name: 'Soltvadkert önkormányzata' },
		{ name: 'Sükösd önkormányzata' },
		{ name: 'Szabadszállás önkormányzata' },
		{ name: 'Szank önkormányzata' },
		{ name: 'Tabdi önkormányzata' },
		{ name: 'Tass önkormányzata' },
		{ name: 'Tázlár önkormányzata' },
		{ name: 'Tompa önkormányzata' },
		{ name: 'Újtelek önkormányzata' },
		{ name: 'Zsana önkormányzata' },
		{ name: 'Gátér önkormányzata' },
		{ name: 'Pálmomostora önkormányzata' },
		{ name: 'Foktő önkormányzata' },
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
