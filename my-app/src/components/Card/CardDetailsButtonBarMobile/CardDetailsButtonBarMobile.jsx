import IMAGES from '../../../res/images'
import { useState, useEffect } from 'react'
import style from './CardDetailsButtonBarMobile.module.scss'

const CardDetailsButtonBarMobile = ({ id, inFavorite, favoriteNumber, viewNumber }) => {
    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])

    return (
        <div className={style.card_details}>
            <div className={style.favoriteView}>
                <span className={style.favoriteView_block}>
                    <img src={IMAGES.heart} width='14px' alt="Favorite Icon" />
                    {favoriteNumber}
                </span>
                <span className={style.favoriteView_block}>
                    <img src={IMAGES.view} width='14px' alt="View Icon" />
                    {viewNumber}
                </span>
            </div>
            <div className={style.details_mobile}>
                <button className={style.details_mobile_btn}>
                    <img src={IMAGES.percent} width='14px' alt="Icon" />
                </button>
                <button className={style.details_mobile_btn}>
                    <img src={IMAGES.share} width='14px' alt="Icon" />
                </button>
                <button className={style.details_mobile_btn}
                    onClick={() => setType(type === true ? false : true)}
                >
                    <img src={type === true ? IMAGES.heartActive : IMAGES.heart} width='14px' alt="Icon" />
                </button>
            </div>
        </div>

    )
}

export default CardDetailsButtonBarMobile;