export const CommerceFiltersMock = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Назначение",
        item: ['Гараж', 'Офис', 'Склад']
    },
    {
        header: "Квадратура",
        item: [50, 75, 100],
        itemAfter: 'м²'
    },
    {
        header: "Цена за метр",
        item: [500, 1000, 2000]
    }
];

export const CommerceMockApi =
    [
        {
            id: 43433257,
            adTitle: "Офис 45 м²",
            category: 'commerce',
            price: 400000,
            location: "Краснодарский край, г.о. Сочи, с. Вардане-Верино, садоводческое товарищество Экспресс р-н Адлерский",
            size: "45 м²",
            photoSmallPath: require('../../../assets/commerce_mock/commerce_3.png'),
            photoLargePath: [
                { url: require('../../../assets/commerce_mock/commerce_3.png') },
                { url: require('../../../assets/commerce_mock/commerce_2.png') },
            ],
            favoriteNumber: 654,
            viewNumber: 246,
            percentageText: 'Процент на ипотеку',
            description: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: {
                propertyType: 'коммерция',
                propertyArea: 45,
                commerceAppointment: 'офис',
                propertyDecorate: false,
                deadlineDate: 'сдан',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },
        {
            id: 434323433257,
            adTitle: "Гараж в кооперативе",
            category: 'commerce',
            price: 1700000,
            location: "Краснодарский край, г.о. Сочи, с. Беранда, Араратская ул., 41 р-н Лазаревский",
            size: "45 м²",
            photoSmallPath: require('../../../assets/commerce_mock/commerce_1.png'),
            photoLargePath: [
                { url: require('../../../assets/commerce_mock/commerce_1.png') },
                { url: require('../../../assets/commerce_mock/commerce_3.png') },
            ],
            favoriteNumber: 15,
            viewNumber: 21,
            percentageText: 'Процент на ипотеку',
            description: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: {
                propertyType: 'коммерция',
                propertyArea: 45,
                commerceAppointment: 'гараж',
                propertyDecorate: true,
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },
        {
            id: 4332334232,
            adTitle: "Этаж в офисном центре",
            category: 'commerce',
            price: 400000,
            location: "Краснодарский край, Сочи, посёлок Лоо, Жигулевская ул. р-н Лазаревский",
            size: "132 м²",
            photoSmallPath: require('../../../assets/commerce_mock/commerce_4.png'),
            photoLargePath: [
                { url: require('../../../assets/commerce_mock/commerce_4.png') },
                { url: require('../../../assets/commerce_mock/commerce_2.png') },
            ],
            favoriteNumber: 145,
            viewNumber: 123,
            percentageText: 'Процент на ипотеку',
            description: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: {
                propertyType: 'коммерция',
                propertyArea: 132,
                commerceAppointment: 'офис',
                propertyDecorate: true,
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
    ]