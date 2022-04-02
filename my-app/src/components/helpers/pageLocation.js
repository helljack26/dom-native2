import { useRoute } from '@react-navigation/native';

const PageLocation = () => {
    const route = useRoute();
    let title, ads
    switch (route.name) {
        case 'ApartmentsPage':
            title = 'Квартиры'
            ads = true
            break;
        case 'HousesPage':
            title = 'Дома'
            ads = true
            break;
        case 'PlotsPage':
            title = 'Участки'
            ads = true
            break;
        case 'CommercePage':
            title = 'Коммерция'
            ads = true
            break;
        case 'RentPage':
            title = 'Аренда'
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
    return ({ title, ads })
}

export default PageLocation;

