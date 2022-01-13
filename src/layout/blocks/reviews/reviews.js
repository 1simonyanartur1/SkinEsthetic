export function reviews() {
	var swiper = new Swiper(".reviews .slider-wrap", {
		spaceBetween: 24,
		loop: true,
		navigation: {
			nextEl: ".reviews .arrow_next",
			prevEl: ".reviews .arrow_prev",
		},
		pagination: {
			el: ".reviews .pagination",
			clickable: true,
			dynamicBullets: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			700: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});
}