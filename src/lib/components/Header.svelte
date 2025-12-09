<script>
  import MainNav from './MainNav.svelte'
  import HamburgerMenuButton from './HamburgerMenuButton.svelte'
  import { siteTitle } from '$lib/config'

  const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
  <a onclick={(e) => { e.preventDefault(); focusMain(); }} class="skip-to-content-link" href="#main">
    Ugrás a tartalomra
  </a>

  <img src="/logo.png" alt="Katasztrófavédelem" class="logo" />

  <a href="/" class="site-title">
    {siteTitle}
  </a>

  <HamburgerMenuButton />
  <MainNav />

</header>