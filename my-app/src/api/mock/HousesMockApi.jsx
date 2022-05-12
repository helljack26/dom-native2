export const HousesFiltersMock = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Цена",
        item: ['от 100', 'от 200', 'от 300']
    },
    {
        header: "Площадь дома",
        item: ['50м²', '75м²', '100м²']
    },
    {
        header: "Площадь участка",
        item: ['8 соток', '10 соток', '15 соток']
    }
];

export const HousesMockApi =
    [
        {
            id: 4357769,
            adTitle: "Дом 280 м² на участке 7,5 сот. пер. Рахманинова",
            category: 'houses',
            price: 27699000,
            oldPrice: 27700000,
            location: "Краснодарский край, Сочи, микрорайон Новый Сочи, пер. Рахманинова р-н Центральный",
            size: "7 комнат • 200 м² • 6 соток",
            photoSmallPath: require('../../../assets/houses/house_small_1.png'),
            photoLargePath: [
                { url: require('../../../assets/houses/house_small_1.png') },
                { url: require('../../../assets/houses/house_small_2.png') },
            ],
            favoriteNumber: 10,
            viewNumber: 260,
            percentageText: 'Процент на ипотеку',
            description: 'В продаже дом в центре города, все коммуникации центральные, всё в собственности. Дом полностью готов к проживанию, на территории бассейн с подогревом, баня, гараж. Планировка ( четыре спальни, и три сан узла) К дому асфальтировный подъед, развитая инфраструктура, море в шаговой доступности. ',
            objectDetails: {
                propertyArea: 280,
                plotArea: 7.5,
                propertyType: 'дом',
                distanceToSea: 240,
                propertyDecorate: true,
                dealProcessing: '-',
                deadlineDate: 'сдан',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 435775469,
            adTitle: "Дом 30 м² на участке 3 сот.",
            category: 'houses',
            price: 7000000,
            location: "Краснодарский край, г.о. Сочи, пос. городского типа Красная Поляна",
            size: "2 комнаты • 30 м² • 3 сотки",
            photoSmallPath: require('../../../assets/houses/house_small_2.png'),
            photoLargePath: [
                { url: require('../../../assets/houses/house_small_2.png') },
                { url: require('../../../assets/houses/house_small_1.png') },
            ],
            favoriteNumber: 10,
            viewNumber: 2620,
            percentageText: 'Процент на ипотеку',
            description: 'В продаже дом в центре города, все коммуникации центральные, всё в собственности.\n\n Дом полностью готов к проживанию, на территории бассейн с подогревом, баня, гараж. Планировка ( четыре спальни, и три сан узла) К дому асфальтировный подъед, развитая инфраструктура, море в шаговой доступности. ',
            objectDetails: {
                propertyArea: 30,
                plotArea: 3,
                propertyType: 'дом',
                distanceToSea: 240,
                propertyDecorate: false,
                dealProcessing: '-',
                deadlineDate: 'сдан',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        }, {
            id: 43577876,
            adTitle: "Дом 280 м² на участке 7,5 сот.",
            category: 'houses',
            price: 227699000,
            location: "Краснодарский край, Сочи, микрорайон Новый Сочи, пер. Рахманинова",
            size: "5 комнат • 280 м² • 7,5 соток",
            photoSmallPath: require('../../../assets/houses/house_small_3.png'),
            photoLargePath: [
                { url: require('../../../assets/houses/house_small_3.png') },
                { url: require('../../../assets/houses/house_small_1.png') },
            ],
            favoriteNumber: 5,
            viewNumber: 2650,
            percentageText: 'Процент на ипотеку',
            description: 'В продаже дом в центре города, все коммуникации центральные, всё в собственности.\n\n Дом полностью готов к проживанию, на территории бассейн с подогревом, баня, гараж. Планировка ( четыре спальни, и три сан узла) К дому асфальтировный подъед, развитая инфраструктура, море в шаговой доступности. ',
            objectDetails: {
                propertyArea: 280,
                plotArea: 7.5,
                propertyType: 'дом',
                distanceToSea: 240,
                propertyDecorate: false,
                dealProcessing: '-',
                deadlineDate: 'сдан',
            },
            agentId: 4,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },

    ]





