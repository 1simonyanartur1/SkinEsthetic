export function faq() {
	var siteSpoilers = document.querySelectorAll(".spoiler");

	if (siteSpoilers) {

		siteSpoilers.forEach(item => {
			var itemTitle = item.querySelector('.spoiler__title');
			itemTitle.addEventListener('click', function (e) {
				e.preventDefault();

				item.classList.toggle('active');
			});
		});

	}

}