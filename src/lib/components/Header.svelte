<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
</script>

<header>
	<a class="skip-to-content-link" href="#main"> Ugrás a tartalomra </a>

	<div class="header-inner">
		<a href="/" class="site-title">
			<div class="ribbon"></div>
			<img src="/logo.png" alt="" class="badge" />
			<span>Bács-Kiskun Vármegyei</span>
			<span>Polgári Védelmi Szövetség</span>
		</a>

		<HamburgerMenuButton />
		<MainNav />
	</div>
</header>
