import moreFilterIcon from '../../../img/icon/more_filters_icon.svg'

import Dropdown from '../../Dropdown'
const APARTMENTDROPDOWN = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Цена",
        item: ['от 100', 'от 200', 'от 300']
    },
    {
        header: "Площадь",
        item: ['50м²', '75м²', '100м²']
    },
    {
        header: "Год сдачи",
        item: ['1990', '2000', '2010']
    }
];

const AdsFilterBar = () => {
    return (
        <div className={style.adsFilter}>
            <div className={style.adsFilter_block}>
                {APARTMENTDROPDOWN.map((item, id) => {
                    return <Dropdown props={item} key={id} />
                })}
            </div>
            <button
                type='button'
                className={style.adsFilter_moreBtn}>
                <span>
                    Еще фильтры
                </span>
                <img src={moreFilterIcon}
                    width='18px'
                    alt="Иконка больше фильтров" />
            </button>
        </div>
    )
}

export default AdsFilterBar;