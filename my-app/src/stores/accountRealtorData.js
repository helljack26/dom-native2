// import api from 'api/index'

export const accountRealtorData = (userId) => {
    const personalData = {
        userPersonalData: {
            userId: 1,
            userImage: require("../../assets/icon/user_photo.png"),
            userName: 'Ирина',
            userSurName: 'Ларионова',
            userPatronymic: 'Булочкина',
            userEmail: 'irina@gmail.com',
            userPhoneNumber: '+38(000)0000000',
            userAgency: 'Дома в Сочи каждому',
            userPosition: 'Руководитель агенства',
            userCodeWord: 'булочка',
            userPassword: 'бесплатнаяквартира',
        },
        userObject: {
            userActiveObject: [
                {
                    id: 75421,
                    complexId: 2658,
                    name: "1-к. Квартира, 75 м², 3/6 эт.",
                    category: 'apartments',
                    price: 3100000,
                    location: "с. Эсто-Садок, ул.Горная Карусель, 6 р-н Адлерский",
                    size: "1 комната, 75 м²",
                    imagePath: [require('../../assets/apartment/appartment_1.png'), require('../../assets/apartment/appartment_2.png')],
                    favoriteNumber: 9,
                    viewNumber: 341,
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
                            chessId: 75421,
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
                {
                    id: 82219,
                    complexId: 2658,
                    name: "Гостиница, 90 м²",
                    category: 'apartments',
                    price: 3100000,
                    oldPrice: 3400000,
                    location: "жилой район Адлер, ул. Просвещения, 74Б",
                    size: "90 м²",
                    imagePath: [require('../../assets/apartment/appartment_2.png'), require('../../assets/apartment/appartment_1.png')],
                    favoriteNumber: 9,
                    viewNumber: 341,
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
                            chessId: 82219,
                            planId: 1215,
                        },
                        deadlineDate: 'сдан',
                    },
                    agentId: 1,
                    isNewHouse: false,
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
                    name: "Апартаменты-студия, 22,8 м², 4/8 эт.",
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
                    name: "1-к. Квартира, 18,3 м², 15/19 эт.",
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
        userEmployees: [
            {
                userId: 2,
                userImage: require("../../assets/icon/user_photo.png"),
                userName: 'Катерина',
                userSurName: 'Баритонова',
                userPatronymic: 'Булочкина',
                userPosition: 'Риелтор',
                userEmail: 'katerina@gmail.com',
                userPhoneNumber: '+38(000)0000000',
            },
            {
                userId: 3,
                userImage: require("../../assets/icon/user_photo.png"),
                userName: 'Василий',
                userSurName: 'Бальмонт',
                userPatronymic: 'Булочкин',
                userPosition: 'Риелтор',
                userEmail: 'vasilii@gmail.com',
                userPhoneNumber: '+38(000)0000000',
            },
            {
                userId: 3,
                userImage: require("../../assets/icon/user_photo.png"),
                userName: 'Василий',
                userSurName: 'Бальмонт',
                userPatronymic: 'Булочкин',
                userPosition: 'Риелтор',
                userEmail: 'vasilii@gmail.com',
                userPhoneNumber: '+38(000)0000000',
            },
        ],
        userSubscription: {
            subscriptionId: 1,
            subscriptionDueDate: 1670961332000,
            subscriptionEmployeesMax: 5,
            subscriptionType: 'Стандартный',
            subscriptionTypes: ['Стандартный', 'Премиум', 'Премиум²']
        }
        ,
        // userMessage
    }
    // const userData = await api.accountRealtorData.getaccountRealtorData(userId)

    return personalData
}