<script>
	import { siteAuthor, contactInfo } from '$lib/config'
	import Icon from '@iconify/svelte';
</script>

<footer>

	<nav>
		<span> Elérhetőségeink:</span>

		<ul>
			<li>
				<Icon icon="lucide:map-pin"/>
				<span> {contactInfo.address} </span>
			</li>
			{#each contactInfo.phones as phone}
				<li>
					<Icon icon="lucide:phone" />
					<span>{phone}</span>
				</li>
			{/each}
			<li>
				<Icon icon="lucide:mail" />
				<span>{contactInfo.email}</span>
			</li>
			<li>
				<Icon icon="lucide:user" />
				<span>{contactInfo.president} elnök</span>
			</li>
		</ul>
	</nav>

	<ul>
		<li>Bankszámlaszám: {contactInfo.bankAccount}</li>
		<li>Adószám: {contactInfo.taxNumber}</li>
		<li>Cégkapu: {contactInfo.companyGate}</li>
		<li>&copy;{new Date().getFullYear()} {siteAuthor}</li>
		<li><a href="/pdfs/alapszabaly.pdf" rel=external>
			<Icon icon="lucide:file-text" />
			<span>Alapszabály</span>
		</a></li>
		<li><a href="/szamviteli-beszamolok" rel=external>
			<Icon icon="lucide:folder-open" />
			<span>Számviteli beszámolók</span>
		</a></li>
	</ul>

</footer>

<style>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		display: flex;
		align-items: center;
		padding: 0;
		margin-bottom: 0.5rem;
		gap: 6px;
	}

	li > span {
		margin-left: 0;
	}

	a {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: inherit;

		&:hover {
			text-decoration: underline;
			color: inherit;
			text-decoration-color: currentColor;
		}
	}
</style>
