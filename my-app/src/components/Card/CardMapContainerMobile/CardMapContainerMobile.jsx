import IMAGES from '../../../res/images'

import style from './CardMapContainerMobile.module.scss'
import { Link } from "react-router-dom";

const CardMapContainerMobile = () => {
    return (
        <div className={style.map}>
            <Link to='/' className={style.map_btn}>
                <img src={IMAGES.showOnMap} width='14px' alt="Map Icon" />На карте</Link>
            <Link to='/' className={style.map_btn}>
                <img src={IMAGES.route} width='14px' alt="Map Icon" />Маршрут</Link>
        </div>
    )
}

export default CardMapContainerMobile;