import { ba } from "../blocks/ba/ba";
import { contact } from "../blocks/contact/contact";
import { equipment } from "../blocks/equipment/equipment";
import { faq } from "../blocks/faq/faq";
import { hamburger } from "../blocks/hamburger/hamburger";
import { header } from "../blocks/header/header";
import { reviews } from "../blocks/reviews/reviews";
import { team } from "../blocks/team/team";

document.addEventListener("DOMContentLoaded", function (event) {
	header();
	hamburger();
	equipment();
	ba();
	team();
	reviews();
	contact();
	faq();

	var tabLink = document.querySelectorAll('.tabs__link');
	var tabTab = document.querySelectorAll('.tabs__tab');

	tabTab.forEach(function (tabTabItem) {
		tabTabItem.style.display = 'none';
	});

	tabTab[0].style.display = 'block';

	tabLink.forEach(function (tabLinkItem) {
		tabLinkItem.addEventListener('click', function (e) {
			e.preventDefault();
			let tabName = this.dataset.tab;
			tabLink.forEach(function (tabLinkItem3) {
				tabLinkItem3.classList.remove('active');
			});
			this.classList.add('active');

			tabTab.forEach(function (tabTabItem) {
				if (tabTabItem.getAttribute('data-tab') == tabName) {
					tabTabItem.style.display = 'block';
				} else {
					tabTabItem.style.display = 'none';
				}
			});
		});
	});
});

window.addEventListener('resize', function (e) {
	header();
}, true);

