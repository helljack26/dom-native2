import IMAGES from '../../../res/images'

import style from './CardSaveButton.module.scss'

const CardSaveButton = () => {
    return (
        <>
            <div className={style.container}>
                <span className={style.container_title}>Понравился объект?</span>
                <div className={style.container_block}>
                    <button type='button' className={style.container_block_btn}>
                        В подборку
                    <img src={IMAGES.collections} width='16px' alt="Save Icon" />
                    </button>
                    <button type='button' className={style.container_block_btn}>
                        <span> Выгрузить в</span> DOC
                    <img src={IMAGES.doc} width='14px' alt="Save Icon" />
                    </button>
                    <button type='button' className={style.container_block_btn}>
                        <span> Выгрузить в</span> PDF
                    <img src={IMAGES.pdf} width='14px' alt="Save Icon" />
                    </button>
                </div>
            </div>
            <div className={style.complain}>
                <a href="#" className={style.complain_link}>
                    <img src={IMAGES.complain} alt="Complain Icon" /> Пожаловаться
                </a>
            </div>
        </>
    )
}

export default CardSaveButton;