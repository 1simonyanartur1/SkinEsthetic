export function ba() {
	const ba = document.querySelector('.ba');
	const sliderForEl = document.querySelector('.ba .slider-for-wrap');
	const sliderNavEl = document.querySelector('.ba .slider-nav-wrap');

	if (ba) {
		var swiper = new Swiper(sliderNavEl, {
			watchSlidesProgress: true,
			allowTouchMove: false,
			slidesPerView: 1,
			spaceBetween: 20,
		});
		
		var swiper2 = new Swiper(sliderForEl, {
			slidesPerView: 1,
			spaceBetween: 20,
			thumbs: {
				swiper: swiper,
			},
			pagination: {
				el: ".ba .pagination",
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".ba .arrow_next",
				prevEl: ".ba .arrow_prev",
			},
		});
	} else {}

}