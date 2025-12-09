<script>
	const reports = [
		{ year: 2024, url: '/pdfs/2024.pdf' },
		{ year: 2023, url: '/pdfs/2023.pdf' },
		{ year: 2022, url: '/pdfs/2022.pdf' },
		{ year: 2021, url: '/pdfs/2021.pdf' },
		{ year: 2020, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2021-08/76133.pdf' },
		{ year: 2019, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2021-08/76132.pdf' },
		{ year: 2018, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2021-08/76131.pdf' },
		{ year: 2017, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41713.pdf' },
		{ year: 2016, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41712.pdf' },
		{ year: 2015, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41711.pdf' },
		{ year: 2014, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41710.pdf' },
		{ year: 2013, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41709.pdf' },
		{ year: 2012, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41708.pdf' },
		{ year: 2011, url: 'https://bacs.katasztrofavedelem.hu/application/uploads/documents/2018-08/41707.pdf' }
	]
</script>

<h1>Számviteli beszámolók és közhasznúsági mellékletek</h1>

{#each reports as report}
	<p><a href={report.url} rel="external">{report.year}. évi számviteli beszámoló és közhasznúsági mellékletei</a></p>
{/each}

<style>
	h1 {
		font-size: 3rem;
	}
</style>