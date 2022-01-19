export function header() {
	var lastScrollTop = 0;
	const header = document.querySelector('.header');
	var st;

	const getPageOffset = () => {
		return st = window.pageYOffset || document.documentElement.scrollTop;
	}
	const checkHeaderposition = () => {
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
	}
	const changeHeaderTemplate = () => {
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

	document.addEventListener("DOMContentLoaded", function (event) {
	
		changeHeaderTemplate();

		getPageOffset();
		checkHeaderposition();
	});

	document.addEventListener('scroll', () => {
		getPageOffset();
		checkHeaderposition();

		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}, false);

	window.addEventListener('resize', function (e) {
		changeHeaderTemplate();
	}, true);
}