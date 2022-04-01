import style from './AdsButtonBar.module.scss'
import { useState } from 'react'

import addToFavorite from '../../../img/icon/heart_icon.svg'
import removeFromFavorite from '../../../img/icon/heart_active_icon.svg'
const AdsButtonBar = () => {
    const [type, setType] = useState(false);
    const sortValue = 'по умолчанию'

    return (
        <div className={style.adsButtonBar}>
            <button
                type='button'
                className={style.adsButtonBar_sort} >
                Сортировка:
                <span className={style.adsButtonBar_sort_value}>{sortValue}</span>
                <span className={style.adsButtonBar_sort_arrow}>&gt;</span>
            </button>
            <button
                type='button'
                onClick={() => {
                    return setType(type ? false : true)
                }}
                className={
                    style.adsButtonBar_searchSave
                }>
                <img src={type ? removeFromFavorite : addToFavorite} width='14px' alt="Иконка сохранить поиск" />
            </button>
        </div>
    )
}

export default AdsButtonBar;