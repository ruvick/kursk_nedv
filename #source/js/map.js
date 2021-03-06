// Яндекс карта
ymaps.ready(init);

function init() {

	var myMap = new ymaps.Map("map", {
		center: [51.730846, 36.193015],
		zoom: 12.3,
		// Выключаем все управление картой
		controls: []

	});


	var myGeoObjects = [];

	myGeoObjects[0] = new ymaps.Placemark([51.730846, 36.193015], {
		// Свойства. 
		// hintContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
		balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
	}, {
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		iconImageHref: 'img/icons/map-marker1.svg',
		// Размеры метки.
		iconImageSize: [36, 55],
		// Смещение левого верхнего угла иконки относительно
		// её «ножки» (точки привязки).
		iconImageOffset: [-18, -26]
	});

	// var clusterIcons=[{
	//         href:'img/map-marker.svg',
	//         size:[31,40],
	//         offset:[0,0]
	// }];

	var clusterer = new ymaps.Clusterer({
		clusterDisableClickZoom: false,
		clusterOpenBalloonOnClick: false,
		// Устанавливаем стандартный макет балуна кластера "Карусель".
		clusterBalloonContentLayout: 'cluster#balloonCarousel',
		// Устанавливаем собственный макет.
		// clusterBalloonItemContentLayout: customItemContentLayout,
		// Устанавливаем режим открытия балуна. 
		// В данном примере балун никогда не будет открываться в режиме панели.
		clusterBalloonPanelMaxMapArea: 0,
		// Устанавливаем размеры макета контента балуна (в пикселях).
		clusterBalloonContentLayoutWidth: 300,
		clusterBalloonContentLayoutHeight: 200,
		// Устанавливаем максимальное количество элементов в нижней панели на одной странице
		clusterBalloonPagerSize: 5
		// Настройка внешего вида нижней панели.
		// Режим marker рекомендуется использовать с небольшим количеством элементов.
		// clusterBalloonPagerType: 'marker',
		// Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
		// clusterBalloonCycling: false,
		// Можно отключить отображение меню навигации.
		// clusterBalloonPagerVisible: false
	});

	clusterer.add(myGeoObjects);
	myMap.geoObjects.add(clusterer);
	myMap.behaviors.disable('scrollZoom');
}


// === Карты были с шаблоном ============================================================================================================================
// google
// function map(n){
// 	google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
// 		var map = this;
// 		var ov = new google.maps.OverlayView(); 
// 		ov.onAdd = function() { 
// 			var proj = this.getProjection(); 
// 			var aPoint = proj.fromLatLngToContainerPixel(latlng);
// 			aPoint.x = aPoint.x+offsetX;
// 			aPoint.y = aPoint.y+offsetY;
// 			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
// 			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
// 		}
// 		ov.draw = function() {};
// 		ov.setMap(this);
// 	};
// 	var markers = new Array();
// 	var infowindow = new google.maps.InfoWindow({
// 		//pixelOffset: new google.maps.Size(-230,250)
// 	});
// 	var locations = [
// 		[new google.maps.LatLng(53.819055,27.8813694)],
// 		[new google.maps.LatLng(53.700055,27.5513694)],
// 		[new google.maps.LatLng(53.809055,27.5813694)],
// 		[new google.maps.LatLng(53.859055,27.5013694)], 
// 	]
// 	var options = {
// 		zoom: 10,
// 		panControl:false,
// 		mapTypeControl:false,
// 		center: locations[0][0],
// 		styles:[{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
// 		scrollwheel:false,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	}; 
// 	var map = new google.maps.Map(document.getElementById('map'), options);
// 	var icon={
// 		url:'img/icons/map.svg',
// 		scaledSize: new google.maps.Size(18, 20),
// 		anchor: new google.maps.Point(9, 10)
// 	}
// 	for (var i = 0; i < locations.length; i++) {
// 		var marker = new google.maps.Marker({
// 			icon:icon,
// 			position: locations[i][0],
// 			map: map,
// 		});
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				for (var m = 0; m < markers.length; m++) {
// 					markers[m].setIcon(icon);
// 				}
// 					var cnt=i+1;
// 				infowindow.setContent($('.contacts-map-item_'+cnt).html());
// 				infowindow.open(map, marker);
// 				marker.setIcon(icon);
// 				map.setCenterWithOffset(marker.getPosition(),0,0);
// 				setTimeout(function(){
// 					baloonstyle();
// 				},10);
// 			}
// 		})(marker, i));
// 		markers.push(marker);
// 	}

// 	if(n){
// 			var nc=n-1;
// 		setTimeout(function(){
// 			google.maps.event.trigger(markers[nc], 'click');
// 		},500);
// 	}
// }
// function baloonstyle(){
// 	$('.gm-style-iw').parent().addClass('baloon');
// 	$('.gm-style-iw').prev().addClass('baloon-style');
// 	$('.gm-style-iw').next().addClass('baloon-close');
// 	$('.gm-style-iw').addClass('baloon-content');
// }
// if($("#map").length>0){
// 	map(1);
// }


/* yandex
function map(n){
	ymaps.ready(init);
	function init(){
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [43.585525,39.723062],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10
		});

		myPlacemar = new ymaps.Placemark([43.585525,39.723062],{
			id:'2'
		},{
			// Опции.
			hasBalloon:false,
			hideIconOnBalloonOpen:false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map.svg',
			// Размеры метки.
			iconImageSize: [40, 40],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -20],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0,0],
		});
		myMap.geoObjects.add(myPlacemar);

		myMap.behaviors.disable('scrollZoom');
	}
}
*/
// ===============================================================================================================================================================