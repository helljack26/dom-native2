import FONTS from '../../res/fonts'
import COLORS from '../../res/colors'

import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CatalogItem from './CatalogItem/CatalogItem'
import RecommendationItem from './RecommendationItem/RecommendationItem'

import { useRoute } from '@react-navigation/native';
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
const CatalogBlock = observer(({ data, catalog }) => {
    const { btnState } = useGalleryButtonStore();
    const route = useRoute();
    const [isHomePage, setIsHomePage] = useState();
    useEffect(() => {
        if (route.name === 'Home') {
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
    }, [route.name]);

    return (
        <>
            <Main
                className={`
            ${!btnState ? styles.dBlock : styles.dNone} 
            ${isHomePage && styles.dBlock} `}>
                <View style={catalog ? styles.main_catalog : styles.main_recommendation}>
                    {data.map(item => {
                        return (catalog ?
                            <CatalogItem data={item} key={item.id} />
                            :
                            <RecommendationItem data={item} key={item.id} />
                        )
                    })}
                </View>
            </Main>
            {!isHomePage &&
                <Text style={styles.main_block}>
                    Карта
            </Text>
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
        // alignItems: 'flex-start'
    },
    // main_block: {
    //     width: '100%',
    // },
    // dBlock: {
    //     visibility: 'visible',
    // },
    // dNone: {
    //     visibility: 'hidden',
    // },

});
