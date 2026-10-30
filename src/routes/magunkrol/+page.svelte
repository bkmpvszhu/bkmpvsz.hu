<script>
	import Magunkrol from '#lib/components/Magunkrol.svelte';

	let clicks = $state(0);
</script>

<svelte:head>
	<title>BKMPVSZ: Magunkról</title>
</svelte:head>

<h1>Magunkról</h1>

<div class="side-columns">
	<div class="text">
		<Magunkrol />
	</div>

	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
	<img
		src={clicks >= 3 ? '/chadmz.jpg' : '/mz.jpg'}
		alt="Mészáros Zoltán elnök"
		width="2016"
		height="2112"
		onclick={() => clicks++}
	/>
</div>

<style>
	.text :global(p:first-child) {
		margin-top: 0;
	}

	img {
		height: auto;
		user-select: none;
	}
</style>
