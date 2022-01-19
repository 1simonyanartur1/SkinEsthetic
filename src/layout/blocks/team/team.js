export function team() {
	const team = document.querySelector('.team');

	if (team) {
		const sliderForEl = document.querySelector('.team .slider-for-wrap');
		const sliderNavEl = document.querySelector('.team .slider-nav-wrap');
		
		var swiper = new Swiper(sliderNavEl, {
			watchSlidesProgress: true,
			allowTouchMove: false,
			initialSlide: 1,
			// loop: true,
			breakpoints: {
				320: {
					spaceBetween: 40,
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 80,
				},
			}
		});
	
		var swiper2 = new Swiper(sliderForEl, {
			slidesPerView: 1,
			spaceBetween: 30,
			thumbs: {
				swiper: swiper,
			},
			pagination: {
				el: ".team .pagination",
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".team .arrow_next",
				prevEl: ".team .arrow_prev",
			},
			// on: {
			// 	slideChange: function () {
			// 		swiper.slideNext(300, true);
			// 	},
			// },
		});
	} else {}

}