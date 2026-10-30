<script>
	import { page } from '$app/state';
	import { menu } from '#lib/state.svelte.js';

	let { href, children } = $props();

	let isCurrentPage = $derived(page.url.pathname.startsWith(href));

	const maybeCloseMenu = () => {
		if (href !== page.url.pathname) {
			menu.open = false;
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
