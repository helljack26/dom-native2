import { useRoute } from '@react-navigation/native';

const PageLocation = () => {
    const route = useRoute();
    let title, ads, isRealtor
    console.log(route.name);
    switch (route.name) {
        case 'ApartmentsPage':
            title = 'Квартиры'
            isRealtor = false
            ads = true
            break;
        case 'HousesPage':
            title = 'Дома'
            isRealtor = false
            ads = true
            break;
        case 'PlotsPage':
            title = 'Участки'
            isRealtor = false
            ads = true
            break;
        case 'CommercePage':
            title = 'Коммерческие объекты'
            isRealtor = false
            ads = true
            break;
        case 'RentPage':
            title = 'Аренда'
            isRealtor = false
            ads = true
            break;
        case 'ApartmentsPageRealtor':
            title = 'Квартиры'
            isRealtor = true
            ads = true
            break;
        case 'HousesPageRealtor':
            title = 'Дома'
            isRealtor = true
            ads = true
            break;
        case 'PlotsPageRealtor':
            title = 'Участки'
            isRealtor = true
            ads = true
            break;
        case 'CommercePageRealtor':
            title = 'Коммерческие объекты'
            isRealtor = true
            ads = true
            break;
        case 'RentPageRealtor':
            title = 'Аренда'
            isRealtor = true
            ads = true
            break;
        case '/':
            title = 'Объявления'
            break;
        case '/novelties':
            title = 'Новинки'
            break;
        case '/disconts':
            title = 'Акции'
            break;
        case '/selections':
            title = 'Подборки'
            break;
        case '/contacts':
            title = 'Контакты'
            break;
        case '/chats':
            title = 'Чаты'
            break;
        case '/news':
            title = 'Новости'
            break;
        default:
            break;
    }
    return ({ title, ads, isRealtor })
}

export default PageLocation;

