<script>
	import { page } from '$app/state';
	import { getContext } from 'svelte';

	let { href, children } = $props();

	const appState = getContext('appState');

	let isCurrentPage = $derived(page.url.pathname.startsWith(href));

	const maybeCloseMenu = () => {
		if (href !== page.url.pathname) {
			appState.isMenuOpen = false;
		}
	};
</script>

<li>
	<a
		{href}
		onclick={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		{@render children()}
	</a>
</li>

<style>
	a {
		color: white;
	}
</style>
