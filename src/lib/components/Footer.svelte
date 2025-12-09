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
		<li><a href="/pdfs/alapszabaly.pdf" rel=external>Alapszabály</a></li>
		<li><a href="/szamviteli-beszamolok" rel=external>Számviteli beszámolók</a></li>
	</ul>

</footer>

<style>

	li {
		padding-left: 16px;
	}

	li > span {
		margin-left: 6px;
	}
</style>
