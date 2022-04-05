import IMAGES from '../../../res/images'
import { useState, useEffect } from 'react'
import style from './CardDetailsButtonBar.module.scss'

const CardDetailsButtonBar = ({ id, inFavorite }) => {
    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])

    return (
        <>
            <div className={style.details}>
                <button className={style.details_btn}>
                    <img src={IMAGES.percent} width='14px' alt="Icon" />
                </button>
                <button className={style.details_btn}>
                    <img src={IMAGES.share} width='14px' alt="Icon" />
                </button>
                <button className={style.details_btn}
                    onClick={() => setType(type === true ? false : true)}
                >
                    <img src={type === true ? IMAGES.heartActive : IMAGES.heart} width='14px' alt="Icon" />
                </button>
            </div>

        </>
    )
}

export default CardDetailsButtonBar;