import IMAGES from '../../../res/images';

import { Link } from 'react-router-dom';
import style from './CardAgentContainer.module.scss'

const agent = {
    name: 'Ирина Ларионова Булочкина',
    lastLogin: '15:26',
    since: '3 года 24 месяца',
    phone: '+38050438452',
    id: 1,
    rating: '4,8',
    agency: 'Дома в Киеве каждому',
    object: [],
}

const CardAgentContainer = () => {
    const { name, lastLogin, since, phone, id, rating, agency, object } = agent;
    return (
        <div className={style.container}>
            <div className={style.container_block}>
                {/* User */}
                <Link className={style.user} to='/'>
                    <img width='52px' height='52px' src={IMAGES.user} alt="Иконка пользователя" />
                    <div className={style.user_info}>
                        <span className={style.user_info_name}>{name}</span>
                        <span className={style.user_info_loginTime}>Онлайн в {lastLogin}</span>
                    </div>
                </Link>
                {/* Button */}
                <div className={style.btn_block} >
                    <button className={`${style.btn} ${style.container_phone}`} type="button">Показать телефон</button>
                    <button className={`${style.btn} ${style.container_chat}`} type="button">Написать в чат</button>
                </div>
            </div>
            {/* Rating */}
            <div className={style.rating}>
                <span className={style.rating_number}>{rating}</span>
                <div className={style.rating_block}>
                    <span className={style.rating_block_title}>
                        Рейтинг пользователя
                    </span >
                    <div className={style.rating_block_links}>
                        <Link className={style.rating_block_links_link} to='/'>
                            Оценить
                        </Link>
                        <span> &nbsp;&nbsp; | &nbsp;&nbsp; </span>
                        <Link className={style.rating_block_links_link} to='/'>
                            Читать отзывы
                        </Link>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className={style.footer}>
                <div className={style.footer_block}>
                    <img src={IMAGES.home} width='15px' alt="Home Icon" />
                    <div className={style.footer_block_text}>
                        <span>Работает с нашим порталом</span>
                        <span>{since}</span>
                    </div>
                </div>
                <div className={style.footer_block}>
                    <img src={IMAGES.userPlain} width='12px' alt="User Icon" />
                    <div className={style.footer_block_text}>
                        <span>Риелтор в агенстве</span>
                        <span>{agency}</span>
                    </div>
                </div>
                <div className={style.footer_block}>
                    <img src={IMAGES.hands} width='13px' alt="Hands Icon" />
                    <div className={style.footer_block_text}>
                        <span>В продаже {object.length} объекта</span>
                        <Link className={style.footer_link} to='/'>
                            Посмотреть
                        </Link>
                    </div>
                </div>
                <div className={style.footer_block}>
                    <img src={IMAGES.lock} width='11px' alt="Lock Icon" />
                    <div className={style.footer_block_text}>
                        <span>Безопасная сделка - Вернём деньги, если товар не подойдёт</span>
                        <Link className={style.footer_link} to='/'>
                            Как работает услуга?
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardAgentContainer;