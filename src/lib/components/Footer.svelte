<script>
	import { siteAuthor } from '$lib/config'
</script>

<footer>

	<nav>
		Elérhetőségeink:
		<ul>
			<li>
				<span class="material-icons-outlined">location_on</span>
				6000 Kecskemét, Deák Ferenc tér 3
			</li>
			<li>
				<span class="material-icons-outlined">call</span>
				+36/20-952-2306
			</li>
			<li>
				<span class="material-icons-outlined">fax</span>
				+36/76-952-2306
			</li>
			<li>
				<span class="material-icons-outlined">email</span>
				kozeplok@vipmail.com
			</li>
			<li>
				<span class="material-icons-outlined">e8a6</span>
				Mészáros Zoltán elnök
			</li>
		</ul>
	</nav>

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" rel="external">RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>