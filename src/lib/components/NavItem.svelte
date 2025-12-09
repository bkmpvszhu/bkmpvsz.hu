<script>
  import { getContext } from 'svelte'

  let { href } = $props()

  const appState = getContext('appState')

  let isCurrentPage = $derived(appState.currentPage.startsWith(href))

  const maybeCloseMenu = () => {
    if (href !== appState.currentPage) {
      appState.isMenuOpen = false
    }
  }
</script>


<li>
  <a
    href={href}
    on:click={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>

<style>
  a {
    color: white;
  }
</style>