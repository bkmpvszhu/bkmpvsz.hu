<script>
	import { primaryNav, secondaryNav } from '#lib/config.js';
	import NavItem from './NavItem.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { menu } from '#lib/state.svelte.js';
</script>

<nav class="main-nav" class:open={menu.open}>
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
