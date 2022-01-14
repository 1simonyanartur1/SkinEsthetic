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

	var lastScrollTop = 0;
	var st;
	document.addEventListener('scroll', () => {
		st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop) {
			// downscroll code
			header.classList.add('scroll');
		} else {
			// upscroll code
		}

		if (st == 0) {
			header.classList.remove('scroll');
		} else {
			header.classList.add('scroll');
		}

		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}, false);
}