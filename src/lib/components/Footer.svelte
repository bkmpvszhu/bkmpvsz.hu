<script>
	import { siteAuthor } from '$lib/config'
	import Icon from '@iconify/svelte';
</script>

<footer>

	<nav>
		<span> Elérhetőségeink:</span>

		<ul>
			<li>
				<Icon icon="akar-icons:location"/>
				<span> 6000 Kecskemét, Deák Ferenc tér 3 </span>
			</li>
			<li>
				<Icon icon="eva:phone-call-outline" />
				<span>+36/20-952-2306</span>
			</li>
			<li>
				<Icon icon="cil:fax" />
				<span>+36/76-952-2306</span>
			</li>
			<li>
				<Icon icon="carbon:email" />
				<span>kozeplok@vipmail.hu</span>
			</li>
			<li>
				<Icon icon="akar-icons:person" />
				<span>Mészáros Zoltán elnök</span>
			</li>
		</ul>
	</nav>

	<ul>
		<li>Bankszámlaszám: 11732002-20414601</li>
		<li>Adószám: 18367186-1-03</li>
		<li>&copy;{new Date().getFullYear()} {siteAuthor}</li>
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