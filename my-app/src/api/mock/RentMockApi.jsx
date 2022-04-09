export const RentFiltersMock = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Тип объекта",
        item: ['Квартира', 'Офис', 'Склад', 'Гараж']
    },
    {
        header: "Тип аренды",
        item: ['Долгосрочная', 'Посуточно'],
    },
    {
        header: "Квадратура",
        item: [500, 1000, 2000],
        itemAfter: 'м²'
    }
];

export const RentMockApi =
    [
        {
            id: 457,
            name: "2-комн. квартира, 45 м²",
            category: 'rent',
            totalArea: 45,
            price: 95000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи, р-н Центральный, мкр. Центр, ул. Роз, 36",
            size: "45 м²",
            photoSmallPath: require('../../../assets/rent_mock/rent_3.png'),
            photoLargePath: [
                { url: require('../../../assets/rent_mock/rent_3.png') },
                { url: require('../../../assets/rent_mock/rent_2.png') },
            ],
            favoriteNumber: 1525,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: [
                {
                    title: 'Тип объекта:',
                    value: 'квартира'
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
                    title: 'Тип аренды:',
                    value: 'Долгосрочная'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 553587,
            name: "2-комн. квартира, 47 м²",
            category: 'rent',
            totalArea: 47,
            price: 95000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи, р-н Центральный, мкр. Мамайка, ул. Волжская, 34/3",
            size: "47 м²",
            photoSmallPath: require('../../../assets/rent_mock/rent_1.png'),
            photoLargePath: [
                { url: require('../../../assets/rent_mock/rent_1.png') },
                { url: require('../../../assets/rent_mock/rent_4.png') },
            ],
            favoriteNumber: 25,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: [
                {
                    title: 'Тип объекта:',
                    value: 'квартира'
                },
                {
                    title: 'Общая площадь:',
                    value: '47 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Тип аренды:',
                    value: 'Долгосрочная'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 5155587,
            name: "1-комн. квартира, 45 м²",
            category: 'rent',
            totalArea: 45,
            price: 32000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи городской округ, Дагомыс пгт, ш. Батумское, 31А",
            size: "45 м²",
            photoSmallPath: require('../../../assets/rent_mock/rent_2.png'),
            photoLargePath: [
                { url: require('../../../assets/rent_mock/rent_2.png') },
                { url: require('../../../assets/rent_mock/rent_1.png') },
            ],
            favoriteNumber: 1525,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: [
                {
                    title: 'Тип объекта:',
                    value: 'квартира'
                },
                {
                    title: 'Общая площадь:',
                    value: '45 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'С отделкой'
                },
                {
                    title: 'Тип аренды:',
                    value: 'Посуточная'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        }, {
            id: 55353387,
            name: "2-комн. квартира, 47 м²",
            category: 'rent',
            totalArea: 47,
            price: 95000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи, р-н Центральный, мкр. Мамайка, ул. Волжская, 34/3",
            size: "47 м²",
            photoSmallPath: require('../../../assets/rent_mock/rent_1.png'),
            photoLargePath: [
                { url: require('../../../assets/rent_mock/rent_1.png') },
                { url: require('../../../assets/rent_mock/rent_4.png') },
            ],
            favoriteNumber: 25,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: [
                {
                    title: 'Тип объекта:',
                    value: 'квартира'
                },
                {
                    title: 'Общая площадь:',
                    value: '47 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Тип аренды:',
                    value: 'Долгосрочная'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        }, {
            id: 51587,
            name: "1-комн. квартира, 45 м²",
            category: 'rent',
            totalArea: 45,
            price: 32000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи городской округ, Дагомыс пгт, ш. Батумское, 31А",
            size: "45 м²",
            photoSmallPath: require('../../../assets/rent_mock/rent_2.png'),
            photoLargePath: [
                { url: require('../../../assets/rent_mock/rent_2.png') },
                { url: require('../../../assets/rent_mock/rent_1.png') },
            ],
            favoriteNumber: 1525,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: [
                {
                    title: 'Тип объекта:',
                    value: 'квартира'
                },
                {
                    title: 'Общая площадь:',
                    value: '45 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'С отделкой'
                },
                {
                    title: 'Тип аренды:',
                    value: 'Посуточная'
                },
            ],
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 411583,
            name: "2-комн. квартира, 34 м²",
            category: 'rent',
            totalArea: 45,
            price: 35000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи, р-н Центральный, мкр. Мамайка, ул. Волжская, 34/3",
            size: "34 м²",
            photoSmallPath: require('../../../assets/rent_mock/rent_3.png'),
            photoLargePath: [
                { url: require('../../../assets/rent_mock/rent_3.png') },
                { url: require('../../../assets/rent_mock/rent_1.png') },
            ],
            favoriteNumber: 1525,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: [
                {
                    title: 'Тип объекта:',
                    value: 'квартира'
                },
                {
                    title: 'Общая площадь:',
                    value: '34 м²',
                },
                {
                    title: 'Отделка:',
                    value: 'Без отделки'
                },
                {
                    title: 'Тип аренды:',
                    value: 'Долгосрочная'
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