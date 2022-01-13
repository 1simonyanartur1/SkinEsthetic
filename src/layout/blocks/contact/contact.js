export function contact() {
	const siteMap = document.querySelector('#map');
	
	if (siteMap) {
		var lat, lng;
	
		lat = parseFloat(siteMap.dataset.lat);
		lng = parseFloat(siteMap.dataset.lng);

		ymaps.ready(init);
	}

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