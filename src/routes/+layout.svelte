<script>
	import '#lib/assets/scss/global.scss';
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { prefersReducedMotion } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	let { children } = $props();
</script>

<div class="layout">
	<Header />
	{#key page.url.pathname}
		<main
			id="main"
			tabindex="-1"
			in:fade={prefersReducedMotion.current ? { duration: 0 } : transitionIn}
			out:fade={prefersReducedMotion.current ? { duration: 0 } : transitionOut}
		>
			{@render children()}
		</main>
	{/key}
	<Footer />
</div>
