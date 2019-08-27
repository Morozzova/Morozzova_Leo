ymaps.ready(init);

        var myMap;

        function init() {
            var myMap = new ymaps.Map("map", {
                center: [56.314682, 43.950417],
                zoom: 12,

                controls: []
            }, {
                suppressMapOpenBlock: true
            });


            var myGeoObjects = [];

            // Метка 1 Чаадаева
            myGeoObjects[0] = new ymaps.Placemark([56.330979, 43.840157], {

                balloonContent: '<div class="map__balloon">Ул. Чаадаева, д.28 <br> Тел.: 8 (831) 282-24-08<img class="balloon__image" src="images/chaadaeva28.jpg"></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });

            // Метка 2 Мочалова
            myGeoObjects[1] = new ymaps.Placemark([56.347479, 43.865894], {
                balloonContent: '<div class="map__balloon">Ул. П.Мочалова, д.4 <br> Тел. 8 (831) 222-08-77<img class="balloon__image"  src="images/mochalova4.jpg"></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });
            // Метка 3 Коминтерна
            myGeoObjects[2] = new ymaps.Placemark([56.348941, 43.869074], {
                balloonContent: '<div class="map__balloon">Ул. Коминтерна, д.115 <br> Тел. 8 (831) 223-73-23<img class="balloon__image"  src="images/kominterna115.jpg"></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });
            // Метка 4 Гордеевская
            myGeoObjects[3] = new ymaps.Placemark([56.324296, 43.944721], {
                balloonContent: '<div class="map__balloon">Ул. Гордеевская, д.2а <br> Тел. 8-930-812-76-19<img class="balloon__image"  src="images/gordeevskaya2a.jpg"></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });
            // Метка 5 Ленина
            myGeoObjects[4] = new ymaps.Placemark([56.293452, 43.933016], {
                balloonContent: '<div class="map__balloon">Пр. Ленина, д. 17 <br> Тел. 8 (831) 240-53-05<img class="balloon__image"  src="images/lenina17.jpg"></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });
            // Метка 6 Ванеева
            myGeoObjects[5] = new ymaps.Placemark([56.309968, 44.020880], {
                balloonContent: '<div class="map__balloon">Ул. Ванеева, д.25/88 <br> Тел. 8 (831) 278-59-21<img class="balloon__image"  src="images/vaneeva25.jpg"></div>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });
            // Метка 7 Ивлиева
            myGeoObjects[6] = new ymaps.Placemark([56.282470, 44.051971], {
                balloonContent: '<div class="map__balloon">Ул. Ивлиева, д.39 <br> Тел. 8-920-050-00-64<img class="balloon__image"  src="images/ivlieva39.jpg"></div>',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map_mark.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-35, -35],
                balloonLayout: "default#imageWithContent",
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, 0],
                balloonImageSize: [0, 0]
            });

            var clusterer = new ymaps.Clusterer({
                clusterDisableClickZoom: false,
                clusterOpenBalloonOnClick: false,
            });

            clusterer.add(myGeoObjects);
            myMap.geoObjects.add(clusterer);

            //закрыть балун при клике на любую точку карты
            myMap.events.add('click', function() {
                myMap.balloon.close();
            });

        }