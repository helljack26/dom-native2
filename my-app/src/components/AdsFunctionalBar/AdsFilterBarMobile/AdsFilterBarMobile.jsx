import style from './AdsFilterBarMobile.module.scss'
import store from "../../../stores/galleryMapBtn";
import { observer } from "mobx-react";

const AdsFilterBarMobile = observer(() => {
    const filterCounter = 3;
    const isGalleryClass = store.btnState;
    return (
        <div className={style.filter_mobile}>
            <button
                type='button'
                className={`${style.button} ${style.border}`}>
                Фильтры
                <span className={style.filterBtn_number} >
                    {filterCounter}
                </span>
            </button>
            <button
                type='button'
                onClick={() => (store.changeView(isGalleryClass ? true : false))}
                className={style.button}>
                {isGalleryClass ? 'Галерея' : 'На карте'}
            </button>
        </div>
    )
})

export default AdsFilterBarMobile;