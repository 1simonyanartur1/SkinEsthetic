export function hamburger() {
	const hamburger = document.querySelector('#hamburger');
	const menu = document.querySelector('#menu');

	hamburger.addEventListener('click', function (e) {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}