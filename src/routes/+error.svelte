<!-- This page handles any error encountered by the site. -->

<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>BKMPVSZ: {page.status}</title>
</svelte:head>

<h1>{page.status === 404 ? 'Ez az oldal nem található' : 'Valami hiba történt'}</h1>

<p>Hibakód: {page.status}</p>

<p><a href="/">Vissza a főoldalra</a></p>
