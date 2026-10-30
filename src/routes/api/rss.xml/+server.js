import { siteName, siteDescription, siteLink } from '#lib/config.js';
import { getPosts } from '#lib/server/posts.js';

export const prerender = true;

export const GET = () =>
	new Response(render(getPosts()), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});

const escapeXml = (text) =>
	text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(siteName)}</title>
<description>${escapeXml(siteDescription)}</description>
<link>${siteLink}</link>
<atom:link href="${siteLink}/api/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteLink}/blog/${post.slug}</guid>
<title>${escapeXml(post.title)}</title>
<link>${siteLink}/blog/${post.slug}</link>
${post.excerpt ? `<description>${escapeXml(post.excerpt)}</description>\n` : ''}<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
