// import IMAGES from '../../../res/images'

import style from './CardSimilarObject.module.scss'
import CatalogItem from '../../CatalogBlock/CatalogItem'
import { SimilarMockApi } from '../../../api/mock/SimilarMockApi.jsx'

const CardSimilarObject = () => {
    const data = SimilarMockApi
    return (
        <div className={style.similar}>
            <h3 >Похожие объекты</h3>
            <div className={style.similar_block}>
                {data.map(item => <CatalogItem data={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default CardSimilarObject;