import IMAGES from '../../../res/images'

import style from './CardPhotoContainer.module.scss'
import './Slider.scss'

import SimpleImageSlider from "react-simple-image-slider";
const CardPhotoContainer = ({ photoCollection }) => {
    return (
        <div className={style.container}>
            <div className={style.container_photo}>
                <SimpleImageSlider
                    width={'100%'}
                    height={'100%'}
                    images={photoCollection}
                    showNavs={true}
                    className='rsis-container'
                    navMargin={5}
                    navSize={30}
                />
            </div>
            <button type='button' className={style.container_btn}>
                <img src={IMAGES.camera} width='22px' alt="Camera icon" />
                Показать все фото ({photoCollection.length})
            </button>
        </div>
    )
}

export default CardPhotoContainer;