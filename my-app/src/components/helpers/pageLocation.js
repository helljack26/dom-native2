import { useLocation } from "react-router-dom";

const PageLocation = () => {
    const location = useLocation();
    let title, ads

    switch (location.pathname) {
        case '/apartments':
            title = 'Квартиры'
            ads = true
            break;
        case '/houses':
            title = 'Дома'
            ads = true
            break;
        case '/plots':
            title = 'Участки'
            ads = true
            break;
        case '/commerce':
            title = 'Коммерция'
            ads = true
            break;
        case '/rent':
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

