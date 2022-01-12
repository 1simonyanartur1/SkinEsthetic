export function equipment() {
	var swiper = new Swiper(".equipment .slider-wrap", {
		slidesPerView: "auto",
		spaceBetween: 22,
		loop: true,
		navigation: {
			nextEl: ".equipment .arrow_next",
			prevEl: ".equipment .arrow_prev",
		},
		breakpoints: {
			320: {
				pagination: false,
			},
			700: {
				pagination: {
					el: ".equipment .pagination",
					clickable: true,
					dynamicBullets: true,
					renderBullet: function (index, className) {
						return '<span class="pagination-bullet pagination-bullet_white ' + className + '"></span>';
					},
				},
			},
		}
	});
}