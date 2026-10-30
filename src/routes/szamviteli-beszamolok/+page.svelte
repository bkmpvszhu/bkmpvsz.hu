<script>
	import Icon from '#lib/components/Icon.svelte';

	const reports = [];
	for (let y = 2025; y >= 2011; y--) {
		reports.push({ year: y, url: `/pdfs/${y}.pdf` });
	}
</script>

<svelte:head>
	<title>BKMPVSZ: Számviteli beszámolók</title>
</svelte:head>

<h1>Számviteli beszámolók és közhasznúsági mellékletek</h1>

<ul class="link-list">
	{#each reports as report (report.year)}
		<li>
			<a href={report.url} rel="external">
				<Icon name="file-text" />
				<span>{report.year}. évi számviteli beszámoló és közhasznúsági mellékletei</span>
			</a>
		</li>
	{/each}
</ul>
