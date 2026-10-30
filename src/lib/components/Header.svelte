<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteName } from '#lib/config.js';
</script>

<header>
	<a class="skip-to-content-link" href="#main"> Ugrás a tartalomra </a>

	<img src="/logo.png" alt="Katasztrófavédelem" class="logo" />

	<a href="/" class="site-title">
		{siteName}
	</a>

	<HamburgerMenuButton />
	<MainNav />
</header>
