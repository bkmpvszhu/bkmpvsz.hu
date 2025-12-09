const orgName = 'Bács-Kiskun Vármegyei Polgári Védelmi Szövetség'
export const siteTitle = orgName
export const siteDescription = `${orgName} weboldala`
export const siteURL = 'bkmpvsz.hu'
export const siteLink = 'https://bkmpvsz.hu'
export const siteAuthor = orgName

// Contact information for footer
export const contactInfo = {
	address: '6000 Kecskemét, Deák Ferenc tér 3',
	phones: ['+36/20-952-2306', '+36/20-453-1728'],
	email: 'bkvpvsz@gmail.com',
	president: 'Mészáros Zoltán',
	bankAccount: '11732002-20414601',
	taxNumber: '18367186-1-03',
	companyGate: '18367186'
}

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

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
