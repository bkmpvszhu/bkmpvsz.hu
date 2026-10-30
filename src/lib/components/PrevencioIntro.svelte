<script>
	let expanded = $state(false);
</script>

<div class="intro">
	<p>
		A Bács-Kiskun Megyei Polgári Védelmi Szövetség Alapszabályban lefektetett célja szerinti
		feladata, egy olyan tanácsadó - felkészítő rendszer megszervezése és működtetése, melynek
		eredményeként az állampolgárok megismerhetik környezetük veszélyforrásait, képessé válnak
		önmaguk és embertársaik életét, vagyontárgyait eredményesen oltalmazni, menteni, mind az elemi
		csapások, mind az ipari katasztrófák esetén.
	</p>
	<button aria-expanded={expanded} onclick={() => (expanded = !expanded)}>
		{expanded ? 'Kevesebb' : 'Tovább olvasom'}
	</button>
	<div class="rest" class:expanded>
		<p>
			Ugyanakkor a folyamatosan változó világ megköveteli, hogy a Szövetség igazodjon a 21. századi
			valósághoz. Ezért a korábbi, klasszikus feladataink megtartása mellett tágabban értelmezzük a
			lakosságot, ezen belül kiemelten az ifjúságot veszélyeztető hatásokat. Így jutottunk arra a
			következtetésre, hogy előrelátóan cselekvő módon, megfelelő szakember bevonásával a
			drogprevenciót is feladataink közé emeljük. Ezzel az a célunk, hogy bemutassuk a droghasználat
			egyértelmű veszélyeit, és tudatosítassuk: a szer alkalmazója fizikailag, pszichikailag,
			anyagilag szakadékba taszítja önmagát és megnyomorítja környezetét. A drogok tudatos
			visszautasítása, az egészséges életmód kialakítása társadalmi ügy, és ebben a Bács-Kiskun
			Megyei Polgári Védelmi Szövetség felelősséget vállal.
		</p>
		<p>
			A drogprevenciót sokan csinálják, de tapasztalatunk szerint kevés a jó előadó. Szerencsére az
			élet úgy alakult, hogy találkoztunk Marosi Antallal, aki a „Drogokról másképpen" című igen
			látványos és elgondolkodtató előadásával lebilincseli a hallgatóságot. Kétségünk nincs afelől,
			hogy a mondanivaló nem jut el mindenkihez. De, ha egy-egy osztályból csak egy potenciális
			áldozatot sikerül eltérítenünk, akkor már megérte. Úgy véljük, annál ezért jobb az arány.
		</p>
		<p>
			2016. óta indított kezdeményezésünk nyitott fülekre talált az iskoláknál, mondhatni visszajáró
			vendégek vagyunk. Talán ez is mutatja, hogy a probléma, vagy legalább is a veszélye létező
			dolog, mint ahogy a tudatos biztonságra való törekvésünk is.
		</p>
	</div>
</div>

<style>
	.intro {
		margin-bottom: 3rem;

		> p:first-child {
			margin-top: 0;
		}
	}

	button {
		min-height: var(--touch-target-min);
		padding: 0;
		border: 0;
		background: none;
		color: var(--green);
		font-family: var(--headingFont);
		font-weight: 700;
		font-size: 1.15rem;
		text-decoration: underline;
		cursor: pointer;
	}

	.rest:not(.expanded) {
		display: none;
	}

	/* There's room beside the news for all of it, so nothing to toggle */
	@media (min-width: 1024px) {
		.intro {
			margin-bottom: 0;
		}

		button {
			display: none;
		}

		.rest:not(.expanded) {
			display: block;
		}
	}
</style>
