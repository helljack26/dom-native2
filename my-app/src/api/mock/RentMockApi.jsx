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
            adTitle: "2-комн. квартира, 45 м²",
            category: 'rent',
            price: 95000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи, р-н Центральный, мкр. Центр, ул. Роз, 36",
            size: "45 м²",
            imagePath: [require('../../../assets/rent_mock/rent_3.png'), require('../../../assets/rent_mock/rent_2.png')],
            favoriteNumber: 1525,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: {
                propertyType: 'квартира',
                propertyArea: 45,
                propertyDecorate: false,
                rentType: 'долгосрочная',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 553587,
            adTitle: "2-комн. квартира, 47 м²",
            category: 'rent',
            price: 95000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи, р-н Центральный, мкр. Мамайка, ул. Волжская, 34/3",
            size: "47 м²",
            imagePath: [require('../../../assets/rent_mock/rent_1.png'), require('../../../assets/rent_mock/rent_4.png')],
            favoriteNumber: 25,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: {
                propertyType: 'квартира',
                propertyArea: 47,
                propertyDecorate: false,
                rentType: 'долгосрочная',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 5155587,
            adTitle: "1-комн. квартира, 45 м²",
            category: 'rent',
            price: 32000,
            priceAfter: '/мес',
            location: "Краснодарский край, Сочи городской округ, Дагомыс пгт, ш. Батумское, 31А",
            size: "45 м²",
            imagePath: [require('../../../assets/rent_mock/rent_2.png'), require('../../../assets/rent_mock/rent_1.png')],
            favoriteNumber: 1525,
            viewNumber: 281,
            percentageText: 'Процент на ипотеку',
            description: 'Апартаменты находятся в комплексе "роз дель мар" на 12 этаже. В квартире имеется все необходимое для приятного проживания. Предоставляются постельное белье и полотенца .',
            objectDetails: {
                propertyType: 'квартира',
                propertyArea: 45,
                propertyDecorate: false,
                rentType: 'посуточная',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },

    ]