<script>
  import { postsPerPage } from '$lib/config'

  let { currentPage, totalPosts, path = '/blog/page' } = $props()

  let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage))

  const isCurrentPage = (page) => page === currentPage
</script>

{#if pagesAvailable > 1}
  <nav aria-label="Pagination navigation" class="pagination">
    <ul>
      {#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
        <li>
          <a href="{path}/{page}" aria-current="{isCurrentPage(page)}">
            <span class="sr-only">
              {#if isCurrentPage(page)}
                Jelenlegi oldal:
              {:else}
                Ugrás az oldalra
              {/if}
            </span>
            {page}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  .pagination {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }

  .pagination ul {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
  }

  .pagination li {
    margin: 0;
  }

  .pagination a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    background: white;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
    text-decoration: none;
    color: var(--dark-text);
    font-weight: 500;
  }

  .pagination a:hover {
    box-shadow: var(--shadow-base);
    transform: translateY(-1px);
  }

  .pagination a[aria-current="true"] {
    background: var(--primary-green);
    color: white;
    box-shadow: var(--shadow-base);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>