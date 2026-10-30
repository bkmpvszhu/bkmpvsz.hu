<script>
	import { siteName, contactInfo, footerNav } from '#lib/config.js';
	import Icon from '#lib/components/Icon.svelte';
</script>

<footer>
	<div class="columns page-width">
		<section>
			<h2>Elérhetőségeink</h2>
			<ul>
				<li>
					<Icon name="map-pin" />
					<span>{contactInfo.address}</span>
				</li>
				{#each contactInfo.phones as phone (phone)}
					<li>
						<Icon name="phone" />
						<a href="tel:{phone.replace(/[^+\d]/g, '')}">{phone}</a>
					</li>
				{/each}
				<li>
					<Icon name="mail" />
					<a href="mailto:{contactInfo.email}">{contactInfo.email}</a>
				</li>
				<li>
					<Icon name="user" />
					<a href="/admin/index.html" rel="external" class="quiet">{contactInfo.president} elnök</a>
				</li>
			</ul>
		</section>

		<section>
			<h2>Adataink</h2>
			<ul>
				<li>Bankszámlaszám: {contactInfo.bankAccount}</li>
				<li>Adószám: {contactInfo.taxNumber}</li>
				<li>Cégkapu: {contactInfo.companyGate}</li>
			</ul>
		</section>

		<section>
			<h2>Dokumentumok</h2>
			<ul>
				<li>
					<Icon name="file-text" />
					<a href="/pdfs/alapszabaly.pdf" rel="external">Alapszabály</a>
				</li>
				<li>
					<Icon name="folder-open" />
					<a href="/szamviteli-beszamolok">Számviteli beszámolók</a>
				</li>
				{#each footerNav as page (page.route)}
					<li>
						<Icon name={page.icon} />
						<a href={page.route}>{page.title}</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>

	<p class="copyright page-width">&copy;{new Date().getFullYear()} {siteName}</p>
</footer>

<style>
	.columns {
		display: grid;
		gap: 2rem;
		padding-block: 2.5rem 2rem;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}

	h2 {
		margin: 0 0 0.75rem;
		font-size: 1.3rem;
		color: inherit;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		min-height: 1.75rem;
		margin-bottom: 0.25rem;
	}

	/* The CMS entrance: reads as plain text */
	.quiet,
	.quiet:hover {
		text-decoration: none;
	}

	.copyright {
		margin-block: 0;
		padding-bottom: 1.5rem;
		font-size: 0.95rem;
	}
</style>
