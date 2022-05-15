// import api from 'api/index'

export const accountClientData = (userId) => {
    const personalData = {
        userPersonalData: {
            userId: 1,
            userImage: require("../../assets/icon/client_photo.png"),
            userName: 'Иван',
            userSurName: 'Иванов',
            userPatronymic: 'Иванович',
            userEmail: 'ivan@gmail.com',
            userPhoneNumber: '+38(000)0000000',
            userPosition: 'Частное лицо',
            userCodeWord: 'ивановичи',
            userPassword: 'квартира',
        },
        userObject: {
            userActiveObject: [
                {
                    complexId: 2658,
                    adTitle: "АК Архитектор",
                    category: 'apartmentsComplex',
                    price: 8430000,
                    location: "Центр, ул. Конституции, 18, Сочи",
                    imagePath: [require('../../assets/apartment_complex/apartment_complex_1.png'), require('../../assets/apartment/appartment_1.png')],
                    favoriteNumber: 29,
                    viewNumber: 407,
                    percentageText: 'Процент на ипотеку',
                    isDone: true,
                    coords: [{
                        lat: 654654,
                        lon: 856156,
                    }],
                    inFavorite: false,
                    description: ['АК Архитектор расположен в самом центре города-курорта Сочи на ул.Конституции СССР, 18. Эта локация — центр города, обладает развитой инфраструктурой и ровной местностью, благодаря чему всегда востребована и пользуется спросом. В шаговой доступности всё, что только может понадобиться для комфортной жизни: бизнес центр, продуктовые супермаркеты, банки, салоны красоты, залы фитнеса, рестораны, кофейни. Гимназия № 8 всего в 5 мин, Гимназия № 1 в 10 мин. Несколько детских садов в 5 мин от комплекса. До набережной и пляжа всего 8-10 мин.'],
                    contactNumbers: ['+3 800 000 00 00', '+3 900 000 00 00'],
                    objectContacts: {
                        complexPhoneNumber: '+3 800 000 00 00',
                        complexEmail: 'dom@gmail.com',
                        complexLocation: 'Центр, ул. Конституции, 18, Сочи',
                    },
                    objectBenefits: ['Консьерж', 'Детская площадка', "Спортивная площадка", "SPA", "Зона отдыха", "Ресторан", "КПП"],
                    objectDetails: {
                        complexDeveloper: 'ООО ААА Арманьяк',
                        complexClass: 'Бизнес',
                        deadlineDate: 'сдан',
                        complexMaterial: 'Монолитный',
                        complexParking: 'Придомовой',
                        complexTerritoryType: 'Закрытая',
                        distanceToSea: 240,
                        complexCeilHight: 2.8,
                        complexGas: false,
                        complexHeat: 'Котельная',
                        complexElectric: 'Подключено',
                        complexSewerage: 'Центральная',
                        complexWaterSupply: 'Центральное',
                    },
                    plans: [{
                        planName: 'Корпус Блок Б',
                        isDone: true,
                        planDescription: '20 квартир, от 22 587 500 ₽, от 620 000 ₽ за м²',
                        planId: 1215,
                    }]
                },
                {
                    id: 10848,
                    adTitle: "Гостиница, 90 м²",
                    category: 'apartments',
                    price: 3100000,
                    oldPrice: 3400000,
                    location: "жилой район Адлер, ул. Просвещения, 74Б",
                    size: "90 м²",
                    imagePath: [require('../../assets/apartment/appartment_3.png'), require('../../assets/detail_card/2.png')],
                    favoriteNumber: 9,
                    viewNumber: 341,
                    percentageText: 'Процент на ипотеку',
                    description: 'ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ!!! Продается однокомнатная квартира с кухней-гостинной в новом жилом комплексе в центре Адлера!<br><br> По площади это самый большой комплекс в Сочи – 12.5 гектаров земли. Объект реально хорош и для проживания (раз уже берут избалованные сочинцы), и для краткосрочного инвестирования. Для тех, кто хочет инвестировать в «Курортный» как в долгосрочный проект есть свои преференции. ',
                    objectDetails: {
                        propertyArea: 22.8,
                        propertyType: 'апартаменты',
                        distanceToSea: 240,
                        propertyDecorate: false,
                        apartmentComplex: {
                            complexName: 'АК Архитектор',
                            complexId: 2658
                        },
                        apartmentChess: {
                            value: '16б',
                            chessId: 10848,
                            planId: 1215,
                        },
                        deadlineDate: 'сдан',
                    },
                    agentId: 1,
                    isNewHouse: true,
                    coords: [{
                        lat: 654654,
                        lon: 856156,
                    }],
                    inFavorite: false
                },
            ],
            userArchiveObject: [
                {
                    id: 10848,
                    complexId: 2658,
                    adTitle: "Апартаменты-студия, 22,8 м², 4/8 эт.",
                    category: 'apartments',
                    price: 8430000,
                    location: "жилой район Адлер, ул. Просвещения, 74Б • р-н Хостинский",
                    size: "1 комната · 75 м²",
                    imagePath: [require('../../assets/apartment/appartment_2.png'), require('../../assets/apartment/appartment_1.png')],
                    favoriteNumber: 9,
                    viewNumber: 341,
                    itemStatus: 'Новинка',
                    percentageText: 'Процент на ипотеку',
                    description: 'ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ!!! Продается однокомнатная квартира с кухней-гостинной в новом жилом комплексе в центре Адлера! По площади это самый большой комплекс в Сочи – 12.5 гектаров земли. Объект реально хорош и для проживания (раз уже берут избалованные сочинцы), и для краткосрочного инвестирования. Для тех, кто хочет инвестировать в «Курортный» как в долгосрочный проект есть свои преференции. Для тех, кто хочет инвестировать в «Курортный» как в долгосрочный проект есть свои преференции.Для тех, кто хочет инвестировать в «Курортный» как в долгосрочный проект есть свои преференции. ',
                    objectDetails: {
                        propertyArea: 22.8,
                        propertyType: 'апартаменты',
                        distanceToSea: 240,
                        propertyDecorate: false,
                        apartmentComplex: {
                            complexName: 'АК Архитектор',
                            complexId: 2658
                        },
                        apartmentChess: {
                            value: '16б',
                            chessId: 10848,
                            planId: 1215,
                        },
                        deadlineDate: 'сдан',
                    },
                    agentId: 1,
                    isNewHouse: true,
                    coords: [{
                        lat: 654654,
                        lon: 856156,
                    }],
                    inFavorite: true
                },
                {
                    id: 91681,
                    complexId: 2658,
                    adTitle: "1-к. Квартира, 18,3 м², 15/19 эт.",
                    category: 'apartments',
                    price: 7887300,
                    location: "ул. Ясногорская, стр. 9 р-н Хостинский",
                    size: "1 комната · 8,3 м²",
                    imagePath: [require('../../assets/apartment/appartment_1.png'), require('../../assets/apartment/appartment_2.png')],
                    favoriteNumber: 9,
                    viewNumber: 341,
                    itemStatus: 'Акция',
                    percentageText: 'Процент на ипотеку',
                    description: 'ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ!!! Продается однокомнатная квартира с кухней-гостинной в новом жилом комплексе в центре Адлера!0 По площади это самый большой комплекс в Сочи – 12.5 гектаров земли. Объект реально хорош и для проживания (раз уже берут избалованные сочинцы), и для краткосрочного инвестирования. Для тех, кто хочет инвестировать в «Курортный» как в долгосрочный проект есть свои преференции. ',
                    objectDetails: {
                        propertyArea: 18.3,
                        propertyType: 'апартаменты',
                        distanceToSea: 240,
                        propertyDecorate: false,
                        apartmentComplex: {
                            complexName: 'АК Архитектор',
                            complexId: 2658
                        },
                        apartmentChess: {
                            value: '15б',
                            chessId: 91681,
                            planId: 1215,
                        },
                        deadlineDate: 'сдан',
                    },
                    agentId: 1,
                    isNewHouse: true,
                    coords: [{
                        lat: 654654,
                        lon: 856156,
                    }],
                    inFavorite: true
                },
            ]

        },
        // userMessage
    }
    // const userData = await api.accountRealtorData.getaccountRealtorData(userId)

    return personalData
}