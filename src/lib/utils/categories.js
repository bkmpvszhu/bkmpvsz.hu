// Category slug → display name mapping
export const categories = {
	hirek: 'Hírek',
	ifjusag: 'Ifjúsági események',
	kepzesek: 'Felkészítések, képzések',
	prevencio: 'Drogprevenció'
}

export function getCategoryTitle(slug) {
	return categories[slug] ?? ''
}
