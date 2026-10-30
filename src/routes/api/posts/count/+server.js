export const GET = async () => {
	try {
		const posts = import.meta.glob(`/src/lib/posts/*.md`);

		return Response.json({
			total: Object.keys(posts).length
		});
	} catch {
		return Response.json({ error: 'Could not retrieve total number of posts.' }, { status: 500 });
	}
};
