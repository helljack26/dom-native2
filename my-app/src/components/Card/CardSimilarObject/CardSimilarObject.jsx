import { styles } from './style.js'
import { useNavigation } from '@react-navigation/native';

const {
    Similar, Similar_header, Similar_block
} = styles;

import CardSimilarItem from './CardSimilarItem'
import { SimilarMockApi } from '../../../api/mock/SimilarMockApi.jsx'

const CardSimilarObject = () => {
    const navigation = useNavigation();

    const data = SimilarMockApi;
    return (
        <Similar>
            <Similar_header >Похожие объекты</Similar_header>
            <Similar_block >
                {data.map(item => <CardSimilarItem data={item} key={item.id} navigation={navigation} />)}
            </Similar_block>
        </Similar>
    )
}

export default CardSimilarObject;