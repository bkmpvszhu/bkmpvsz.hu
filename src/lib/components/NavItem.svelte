<script>
  import { getContext } from 'svelte'

  let { href, children } = $props()

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