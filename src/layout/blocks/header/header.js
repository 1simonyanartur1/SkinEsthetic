export function header() {
	const header = document.querySelector('.header');

	var windowWidth = window.innerWidth;
	var isMobile = windowWidth < 1200;

	if (isMobile) {
		header.classList.add('header_mobile');
		header.classList.remove('header_desktop');
	} else {
		header.classList.remove('header_mobile');
		header.classList.add('header_desktop');
	}
}