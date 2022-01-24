export function contact() {
	
	setTimeout(function () {
		var elem = document.createElement('script');
		elem.src = "https://api-maps.yandex.ru/2.1/?apikey=6184eb16-4f7f-477d-bb93-452c4404b653&lang=ru_RU&load=package.standard&lang=ru_RU";
		document.body.appendChild(elem);
	}, 3000);

	const siteMap = document.querySelector('#map');
	var mapLoad;
	var lat;
	var lng;

	if (siteMap) {
		lat = parseFloat(siteMap.dataset.lat);
		lng = parseFloat(siteMap.dataset.lng);
		mapLoad = document.querySelector('.map__btn');
		
		mapLoad.addEventListener('click', function (e) {
			ymaps.ready(init);
			this.style.display = 'none';
		});
	} else {}


	function init() {
		var myMap = new ymaps.Map("map", {
			center: [lat, lng],
			zoom: 17
		}, {
			suppressMapOpenBlock: false,
		});
		var myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: [lat, lng]
			}
		});
		myMap.geoObjects.add(new ymaps.Placemark([lat, lng], {
			balloonContent: '<p><strong>Адрес: </strong><p>г.Санкт-Петербург, ул.Петроградная 90</p>'
		}, {
			preset: 'islands#icon',
			iconColor: '#00B5C8'
		}));
	}
}