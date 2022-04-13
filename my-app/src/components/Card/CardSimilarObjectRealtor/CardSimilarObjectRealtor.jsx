import { styles } from './style.js'
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import CatalogItemRealtor from '../../CatalogBlockRealtor/CatalogItemRealtor/CatalogItemRealtor'
import { SimilarMockApi } from '@/api/mock/SimilarMockApi.jsx'
const {
    Similar,
    Similar_header,
    Similar_block
} = styles;

const CardSimilarObjectRealtor = () => {
    const navigation = useNavigation();

    const data = SimilarMockApi;
    return (
        <Similar>
            <Similar_header >Похожие объекты</Similar_header>
            <Similar_block >
                {data.map(item => <CatalogItemRealtor data={item} key={item.id} navigation={navigation} />)}
            </Similar_block>
        </Similar>
    )
}

export default CardSimilarObjectRealtor;