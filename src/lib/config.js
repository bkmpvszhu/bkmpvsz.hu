import { categories } from '#lib/utils/categories.js';

export const siteName = 'Bács-Kiskun Megyei Polgári Védelmi Szövetség';
export const siteDescription = `${siteName} weboldala`;
export const siteLink = 'https://bkmpvsz.hu';

// Contact information for footer
export const contactInfo = {
	address: '6000 Kecskemét, Deák Ferenc tér 3',
	phones: ['+36/20-952-2306', '+36/20-453-1728'],
	email: 'bkvpvsz@gmail.com',
	president: 'Mészáros Zoltán',
	bankAccount: '11732002-20414601',
	taxNumber: '18367186-1-03',
	companyGate: '18367186'
};

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 6;

const categoryNavItem = (slug) => ({
	title: categories[slug],
	route: `/blog/category/${slug}`
});

// Edit these to alter the navigation. Primary and secondary are in the header and mobile menu.
export const primaryNav = ['hirek', 'ifjusag', 'kepzesek'].map(categoryNavItem);

export const secondaryNav = [
	categoryNavItem('prevencio'),
	{
		title: 'Benke László Emlékplakett',
		route: '/benke-laszlo-emlekplakett'
	},
	{
		title: 'Magunkról',
		route: '/magunkrol'
	},
	{
		title: 'Támogatóink',
		route: '/tamogatoink'
	}
];

// Shown in the footer only
export const footerNav = [
	{
		title: 'Társoldalak',
		route: '/tarsoldalak',
		icon: 'link'
	}
];
