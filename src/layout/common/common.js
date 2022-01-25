import { ba } from "../blocks/ba/ba";
import { contact } from "../blocks/contact/contact";
import { equipment } from "../blocks/equipment/equipment";
import { faq } from "../blocks/faq/faq";
import { hamburger } from "../blocks/hamburger/hamburger";
import { header } from "../blocks/header/header";
import { modals } from "../blocks/modals/modals";
import { reviews } from "../blocks/reviews/reviews";
import { team } from "../blocks/team/team";

header();

document.addEventListener("DOMContentLoaded", function (event) {
	const el = document.querySelectorAll(".lozad");
	const observer = lozad(el);
	observer.observe();

	hamburger();
	equipment();
	ba();
	team();
	reviews();
	faq();

	// Добавляем к каждой таблице в тексте и в табы
	var tabsLists = document.querySelectorAll('.tabs-list');

	tabsLists.forEach(tabsList => {
		tabsList.classList.add('customScroll');
	});

	const tabs = document.querySelector('.tabs');

	if (tabs) {
		var tabsLink = document.querySelectorAll('.tabs__link');
		var tabsTab = document.querySelectorAll('.tabs__tab');

		tabsTab.forEach(function (tabsTabItem) {
			tabsTabItem.style.display = 'none';
		});

		tabsTab[0].style.display = 'block';

		tabsLink[0].classList.add('active');

		tabsLink.forEach(function (tabsLinkItem) {
			tabsLinkItem.addEventListener('click', function (e) {
				e.preventDefault();
				let tabName = this.dataset.tab;
				tabsLink.forEach(function (tabsLinkItem3) {
					tabsLinkItem3.classList.remove('active');
				});
				this.classList.add('active');

				tabsTab.forEach(function (tabsTabItem) {
					if (tabsTabItem.getAttribute('data-tab') == tabName) {
						tabsTabItem.style.display = 'block';
					} else {
						tabsTabItem.style.display = 'none';
					}
				});
			});
		});

		// количество фотографий в табе
		const fotoSection = document.querySelector('.foto');
		if (fotoSection) {
			tabsTab.forEach(tab => {
				let name = tab.dataset.tab;
				let fotos = tab.querySelectorAll('.item__img');
				let count = fotos.length;

				tabsLink.forEach(link => {
					let num = link.querySelector('.tabs-num');

					if (link.dataset.tab == name) {
						num.innerHTML = count;
					} else {}

				});
			});
		}

	} else {}

	(function addPhoneMask() {
		let telephone = document.querySelectorAll('input[type="tel"]');
		let im = new Inputmask("+7 (999) 999-99-99");
		im.mask(telephone);
	}());

	OverlayScrollbars(document.querySelectorAll('.customScroll'), {});

	modals();
});

window.onload = function() {
	contact();
};

