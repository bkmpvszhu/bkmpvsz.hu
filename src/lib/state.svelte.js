export function createAppState() {
	let isMenuOpen = $state(false);

	return {
		get isMenuOpen() {
			return isMenuOpen;
		},
		set isMenuOpen(v) {
			isMenuOpen = v;
		},
		toggleMenu() {
			isMenuOpen = !isMenuOpen;
		}
	};
}
