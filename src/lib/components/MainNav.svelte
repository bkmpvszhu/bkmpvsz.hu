<script>
	import { primaryNav, secondaryNav } from '#lib/config.js';
	import { getContext } from 'svelte';
	import NavItem from './NavItem.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';

	const appState = getContext('appState');
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={appState.isMenuOpen}>
	<ul class="primary">
		{#each primaryNav as page (page.route)}
			<NavItem href={page.route}>
				{page.title}
			</NavItem>
		{/each}
	</ul>
	<ul class="secondary">
		{#each secondaryNav as page (page.route)}
			<NavItem href={page.route}>
				{page.title}
			</NavItem>
		{/each}
	</ul>
	<HamburgerMenuButton closeOnly={true} />
</nav>
