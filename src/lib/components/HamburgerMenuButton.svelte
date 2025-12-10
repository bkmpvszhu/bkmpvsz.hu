<script>
  import { getContext } from 'svelte'
  import HamburgerSVG from './svg/HamburgerSVG.svelte'
  import XSVG from './svg/XSVG.svelte'

  let { closeOnly = false } = $props()

  const appState = getContext('appState')

  const toggleIsMenuOpen = () => {
    appState.toggleMenu()
  }
</script>

<button
  onclick={toggleIsMenuOpen}
  aria-pressed={appState.isMenuOpen}
  class="menu-button"
  tabindex={(appState.isMenuOpen || !closeOnly) ? '0' : '-1'}
>
  <span class="sr-only">Menü megjelenítése</span>
  {#if closeOnly}
    <XSVG />
  {:else}
    <HamburgerSVG />
  {/if}
</button>