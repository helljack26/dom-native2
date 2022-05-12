import React from 'react';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import IMAGES from '@/res/images'

import CatalogBlockItem from '../CatalogBlockItem/CatalogBlockItem'

import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';

// Styles
// import { styleCatalogBlock } from './styleCatalogBlock'
import { styleRecommendationBlock } from './styleRecommendationBlock'

const CatalogBlock = observer(({ isRecommendation, percentButton }) => {

    // StyleSheet defined
    // const style = isRecommendation !== undefined ? styleRecommendationBlock : styleCatalogBlock;
    const { isGallery, catalog, setCatalog } = useCatalogApiStore();
    const {
        Main,
        MainBlock
    } = styleRecommendationBlock;

    const route = useRoute();
    useEffect(() => {
        if (route) {
            setCatalog(route.name);
        }
    }, [route]);
    return (
        <>
            {isGallery &&
                <Main>
                    <MainBlock>
                        {catalog.map(item =>
                            <CatalogBlockItem
                                data={item}
                                key={item.id}
                                isRecommendation={true}
                                percentButton={percentButton}
                            />)}
                    </MainBlock>
                </Main>}
            {isGallery === false &&
                <Image
                    style={{ width: '100%' }}
                    source={IMAGES.map_template} />
            }
        </>
    )
})

export default CatalogBlock;