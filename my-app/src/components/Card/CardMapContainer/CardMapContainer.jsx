import IMAGES from '../../../res/images'

import style from './CardMapContainer.module.scss'
import { Link } from "react-router-dom";

const CardMapContainer = ({ favoriteNumber, viewNumber }) => {
    return (
        <>
            <div className={style.map}>
                <Link to='/' className={style.map_btn}>
                    <img src={IMAGES.showOnMap} width='14px' alt="Map Icon" />Смотреть на карте</Link>
                <Link to='/' className={style.map_btn}>
                    <img src={IMAGES.route} width='14px' alt="Map Icon" />Простроить маршрут</Link>
            </div>

            <div className={style.favoriteView}>
                <span className={style.favoriteView_block}>
                    <img src={IMAGES.heart} width='14px' alt="Favorite Icon" />
                В избранном у: {favoriteNumber}
                </span>
                <span className={style.favoriteView_block}>
                    <img src={IMAGES.view} width='14px' alt="View Icon" />
                Просмотров: {viewNumber}
                </span>
            </div>
        </>
    )
}

export default CardMapContainer;