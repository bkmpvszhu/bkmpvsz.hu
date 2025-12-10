<script>
    import Icon from '@iconify/svelte';

    const reports = [];
    for (let y = 2024; y >= 2011; y--) {
        reports.push({ year: y, url: `/pdfs/${y}.pdf` });
    }
</script>

<h1>Számviteli beszámolók és közhasznúsági mellékletek</h1>

{#each reports as report}
	<p><a href={report.url} rel="external">
		<Icon icon="lucide:file-text" />
		<span>{report.year}. évi számviteli beszámoló és közhasznúsági mellékletei</span>
	</a></p>
{/each}

<style>
    h1 {
        font-size: 3rem;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 6px;

        &:hover {
            text-decoration: underline;
        }
    }
</style>