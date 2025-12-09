<script>
  import { navItems } from '$lib/config'
  import { getContext } from 'svelte'
  import NavItem from './NavItem.svelte'
  import HamburgerMenuButton from './HamburgerMenuButton.svelte'

  const appState = getContext('appState')
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={appState.isMenuOpen}>
  <ul>
    {#each navItems as page}
    <NavItem href={page.route}>
      {page.title}
    </NavItem>
    {/each}
  </ul>
  <HamburgerMenuButton closeOnly={true} />
</nav>