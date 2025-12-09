export function createAppState() {
	let currentPage = $state('')
	let isMenuOpen = $state(false)

	return {
		get currentPage() { return currentPage },
		set currentPage(v) { currentPage = v },
		get isMenuOpen() { return isMenuOpen },
		set isMenuOpen(v) { isMenuOpen = v },
		toggleMenu() { isMenuOpen = !isMenuOpen }
	}
}
