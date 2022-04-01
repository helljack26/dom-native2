import style from './AdsPageTitle.module.scss'


const AdsPageTitle = ({ title, city = 'Сочи', queryNumber = 143 }) => {
    return (
        <div className={style.adsHeaderBlock}>
            <h1 className={style.adsHeader}>{title} в {city}</h1>
            {queryNumber && <span className={style.adsQueryNumber}>{queryNumber} объекта</span>}
        </div>
    )
}

export default AdsPageTitle;