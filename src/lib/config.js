const orgName = 'Bács-Kiskun Vármegyei Polgári Védelmi Szövetség'
export const siteTitle = orgName
export const siteDescription = `${orgName} weboldala`
export const siteURL = 'example.com' //TODO
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter' //TODO
export const siteAuthor = orgName

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 9999

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Magunkról',
		route: '/magunkrol'
	},
	{
		title: 'Hírek',
		route: '/blog/category/hirek'
	},
	{
		title: 'Ifjúsági események',
		route: '/blog/category/ifjusag'
	},
	{
		title: 'Felkészítések, képzések',
		route: '/blog/category/kepzesek'
	},
	{
		title: 'Drogprevenció',
		route: '/blog/category/prevencio'
	},
	{
		title: 'Támogatóink',
		route: '/tamogatoink'
	},
	{
		title: 'Benke László Emlékplakett',
		route: '/emlekplakett'
	},
	{
		title: 'Társoldalak',
		route: '/tarsoldalak'
	},
]
