export function reviews() {

	const reviewsSlider = document.querySelector('.reviews-slider');

	if (reviewsSlider) {
		var swiper = new Swiper(".reviews-slider .slider-wrap", {
			spaceBetween: 24,
			loop: true,
			navigation: {
				nextEl: ".reviews-slider .arrow_next",
				prevEl: ".reviews-slider .arrow_prev",
			},
			pagination: {
				el: ".reviews-slider .pagination",
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
	} else {}

}