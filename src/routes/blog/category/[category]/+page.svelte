<!-- This dynamic page renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { getCategoryTitle } from '$lib/utils/categories'

	let { data } = $props()
	let posts = $derived(data.posts)
	let category = $derived(data.category)
	let total = $derived(data.total)
</script>


<svelte:head>
	<title>BKMPVSZ: {getCategoryTitle(category)}</title>
</svelte:head>

<h1>{getCategoryTitle(category)}</h1>

{#if posts.length}
	<Pagination currentPage={1} totalPosts={total} path="/blog/category/{category}/page"/>
	{#if category === 'prevencio'}
		<div class="pinned-container">
			<div class="card pinned">
				A Bács-Kiskun Vármegyei Polgári Védelmi Szövetség Alapszabályban lefektetett célja szerinti feladata, egy olyan tanácsadó - felkészítő rendszer megszervezése és működtetése, melynek eredményeként az állampolgárok megismerhetik környezetük veszélyforrásait, képessé válnak önmaguk és embertársaik életét, vagyontárgyait eredményesen oltalmazni, menteni, mind az elemi csapások, mind az ipari katasztrófák esetén.
				<br><br>Ugyanakkor a folyamatosan változó világ megköveteli, hogy a Szövetség igazodjon a 21. századi valósághoz. Ezért a korábbi, klasszikus feladataink megtartása mellett tágabban értelmezzük a lakosságot, ezen belül kiemelten az ifjúságot veszélyeztető hatásokat. Így jutottunk arra a következtetésre, hogy előrelátóan cselekvő módon, megfelelő szakember bevonásával a drogprevenciót is feladataink közé emeljük. Ezzel az a célunk, hogy bemutassuk a droghasználat egyértelmű veszélyeit, és tudatosítassuk: a szer alkalmazója fizikailag, pszichikailag, anyagilag szakadékba taszítja önmagát és megnyomorítja környezetét. A drogok tudatos visszautasítása, az egészséges életmód kialakítása társadalmi ügy, és ebben a Bács-Kiskun Megyei Polgári Védelmi Szövetség felelősséget vállal.
				<br><br>A drogprevenciót sokan csinálják, de tapasztalatunk szerint kevés a jó előadó. Szerencsére az élet úgy alakult, hogy találkoztunk Marosi Antallal, aki a „Drogokról másképpen" című igen látványos és elgondolkodtató előadásával lebilincseli a hallgatóságot. Kétségünk nincs afelől, hogy a mondanivaló nem jut el mindenkihez. De, ha egy-egy osztályból csak egy potenciális áldozatot sikerül eltérítenünk, akkor már megérte. Úgy véljük, annál ezért jobb az arány.
				<br><br>2016. óta indított kezdeményezésünk nyitott fülekre talált az iskoláknál, mondhatni visszajáró vendégek vagyunk. Talán ez is mutatja, hogy a probléma, vagy legalább is a veszélye létező dolog, mint ahogy a tudatos biztonságra való törekvésünk is.
			</div>
		</div>
	{/if}
	<PostsList {posts}/>
	<Pagination currentPage={1} totalPosts={total} path="/blog/category/{category}/page"/>
{:else}
	<p><strong>Hoppá!</strong> Sajnos ebben a kategóriában még nincs egy poszt sem.</p>

	<p><a href="/">Vissza a főoldalra</a></p>
{/if}

<style>
	h1 {
		text-align: center;
	}

	h1::after {
		width: 50%;
		margin-left: -25%;
		left: 50%;
	}

	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		padding: 1rem;
		margin-bottom: 2rem;
		border-radius: 15px;
		background: white;
	}

	.pinned-container {
		/* Match the PostsList container width using the same breakout technique */
		@media (min-width: 768px) {
			width: 100vw;
			max-width: 60rem;
			margin-left: 50%;
			transform: translateX(-50%);
			padding: 0 2rem;
		}

		@media (min-width: 1024px) {
			max-width: 75rem;
		}

		@media (min-width: 1280px) {
			max-width: 85rem;
		}
	}

	.pinned {
		text-align: justify;
	}
</style>
