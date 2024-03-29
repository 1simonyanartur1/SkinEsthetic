export function equipment() {
	const equipment = document.querySelector('.equipment');

	if (equipment) {
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
					},
				},
			}
		});
	} else {}

}