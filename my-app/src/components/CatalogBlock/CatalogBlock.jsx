import FONTS from '../../res/fonts'
import IMAGES from '../../res/images'
import COLORS from '../../res/colors'

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CatalogItem from './CatalogItem/CatalogItem'
import { observer } from 'mobx-react-lite';
import { useGalleryButtonStore } from '../../stores/galleryMapBtn';

import styled from 'styled-components/native';
const Main = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0px 4%;
width: 92%;
background-color: white;
padding-top: 12px;
`;
const CatalogBlock = observer(({ data }) => {
    const { btnState } = useGalleryButtonStore();

    return (
        <>
            {  btnState && <Main
                style={`
            ${styles.main} } `}>
                <View style={styles.main_catalog}>
                    {data.map(item => {
                        return (
                            <CatalogItem data={item} key={item.id} />
                        )
                    })}
                </View>
            </Main>}
            {
                !btnState &&
                <Image
                    style={styles.map_template}
                    source={IMAGES.map_template} />
                // <Text>Карта</Text>
            }
        </>
    )
})

export default CatalogBlock;

const styles = StyleSheet.create({
    main_recommendation: {
        width: '100%',
    },
    main_catalog: {
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    map_template: {
        marginTop: 15,
    }
});
