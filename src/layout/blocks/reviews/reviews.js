export function reviews() {
	var swiper = new Swiper(".reviews .slider-wrap", {
		slidesPerView: 3,
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
			},
			700: {
			},
		}
	});
}