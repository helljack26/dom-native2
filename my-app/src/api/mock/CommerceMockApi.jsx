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
            name: "Офис 45 м²",
            category: 'commerce',
            totalArea: 45,
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
            objectDetails: [
                {
                    title: 'Назначение:',
                    value: 'офис'
                },
                {
                    title: 'Общая площадь:',
                    value: '45 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Срок сдачи:',
                    value: 'сдан'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },
        {
            id: 434323433257,
            name: "Гараж в кооперативе",
            category: 'commerce',
            totalArea: 12,
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
            objectDetails: [
                {
                    title: 'Назначение:',
                    value: 'офис'
                },
                {
                    title: 'Общая площадь:',
                    value: '12 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Срок сдачи:',
                    value: 'сдан'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },
        {
            id: 4332334232,
            name: "Этаж в офисном центре",
            category: 'commerce',
            totalArea: 132,
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
            objectDetails: [
                {
                    title: 'Назначение:',
                    value: 'этаж'
                },
                {
                    title: 'Общая площадь:',
                    value: '132 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'с отделкой'
                },
                {
                    title: 'Срок сдачи:',
                    value: 'сдан'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        }, {
            id: 43642127,
            name: "Этаж в офисном центре",
            category: 'commerce',
            totalArea: 45,
            price: 400000000,
            location: "Краснодарский край, Сочи, посёлок Лоо, Жигулевская ул. р-н Лазаревский",
            size: "132 м²",
            photoSmallPath: require('../../../assets/commerce_mock/commerce_4.png'),
            photoLargePath: [
                { url: require('../../../assets/commerce_mock/commerce_4.png') },
                { url: require('../../../assets/commerce_mock/commerce_5.png') },
            ],
            favoriteNumber: 15,
            viewNumber: 21,
            percentageText: 'Процент на ипотеку',
            description: 'Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: [
                {
                    title: 'Назначение:',
                    value: 'этаж'
                },
                {
                    title: 'Общая площадь:',
                    value: '45 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Срок сдачи:',
                    value: 'сдан'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        }, {
            id: 114343357,
            name: "Гараж в кооперативе",
            category: 'commerce',
            totalArea: 12,
            price: 400000,
            location: "Краснодарский край, г.о. Сочи, с. Беранда, Араратская ул., 41 р-н Лазаревский",
            size: "12 м²",
            photoSmallPath: require('../../../assets/commerce_mock/commerce_6.png'),
            photoLargePath: [
                { url: require('../../../assets/commerce_mock/commerce_6.png') },
                { url: require('../../../assets/commerce_mock/commerce_2.png') },
            ],
            favoriteNumber: 145,
            viewNumber: 2331,
            percentageText: 'Процент на ипотеку',
            description: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: [
                {
                    title: 'Назначение:',
                    value: 'офис'
                },
                {
                    title: 'Общая площадь:',
                    value: '12 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Срок сдачи:',
                    value: 'сдан'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        }, {
            id: 43433258887,
            name: "Офис 132 м²",
            category: 'commerce',
            totalArea: 132,
            price: 12400000,
            location: "Краснодарский край, г.о. Сочи, с. Вардане-Верино, садоводческое товарищество Экспресс р-н Адлерский",
            size: "45 м²",
            photoSmallPath: require('../../../assets/commerce_mock/commerce_2.png'),
            photoLargePath: [
                { url: require('../../../assets/commerce_mock/commerce_2.png') },
                { url: require('../../../assets/commerce_mock/commerce_1.png') },
            ],
            favoriteNumber: 15,
            viewNumber: 21,
            percentageText: 'Процент на ипотеку',
            description: 'Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: [
                {
                    title: 'Назначение:',
                    value: 'офис'
                },
                {
                    title: 'Общая площадь:',
                    value: '132 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Срок сдачи:',
                    value: 'сдан'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
    ]