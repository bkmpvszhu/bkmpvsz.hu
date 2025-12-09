<!-- This page handles any error encountered by the site. -->

<script>
  import { page } from '$app/stores'

  $: status = $page.status
  $: message = $page.error?.message || 'Unknown error'
</script>

<h2>{status}</h2>

<p class="subhead">{message}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul>
  <li><a href="/">Home</a></li>
</ul>