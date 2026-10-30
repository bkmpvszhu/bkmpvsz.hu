<script>
	import { menu } from '#lib/state.svelte.js';
	import HamburgerSVG from './svg/HamburgerSVG.svelte';
	import XSVG from './svg/XSVG.svelte';

	let { closeOnly = false } = $props();
</script>

<button
	onclick={() => (menu.open = !menu.open)}
	aria-expanded={menu.open}
	class="menu-button"
	tabindex={menu.open || !closeOnly ? '0' : '-1'}
>
	<span class="sr-only">{closeOnly ? 'Menü bezárása' : 'Menü megnyitása'}</span>
	{#if closeOnly}
		<XSVG />
	{:else}
		<HamburgerSVG />
	{/if}
</button>
