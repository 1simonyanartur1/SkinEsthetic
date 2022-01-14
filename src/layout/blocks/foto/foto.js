export function foto() {
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
}