<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
  import '$lib/assets/scss/global.scss'
  import '$lib/icons.js'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { createAppState } from '$lib/state.svelte.js'
  import { setContext, onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  const transitionIn = { delay: 150, duration: 150 }
  const transitionOut = { duration: 100 }

  let { data, children } = $props()
  let path = $derived(data.path)

  // Create and provide app state via context
  const appState = createAppState()
  setContext('appState', appState)

  /**
   * Updates the global state with the current path. (Used for highlighting
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $effect(() => {
    appState.currentPage = path
  })

  /**
   * Netlify Identity integration for CMS login (runs once on mount)
   **/
  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  })
</script>

<!--
  The below markup is used on every page in the site. The {@render children()} is where the page's
  actual contents will show up.
-->
<div class="layout" class:open={appState.isMenuOpen}>
  <Header />
  {#key path}
    <main
      id="main"
      tabindex="-1"
      in:fade={transitionIn}
      out:fade={transitionOut}
    >
      {@render children()}
    </main>
  {/key}
  <Footer />
</div>

<svelte:head>
 <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>