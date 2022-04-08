import IMAGES from '../../res/images'

import React from 'react';
import { useEffect } from 'react';

import { StyleSheet, View, Image } from 'react-native';
import CatalogItem from './CatalogItem/CatalogItem'
import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '../../stores/CatalogApi';
import { useRoute } from '@react-navigation/native';


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
const CatalogBlock = observer(() => {
    const { mapBtnState, catalog, setCatalog } = useCatalogApiStore();
    // const catalogData = catalog ? catalog : []

    const route = useRoute();
    useEffect(() => {
        if (route.name) {
            setCatalog(route.name);
        }
    }, [route]);

    return (
        <>
            {!mapBtnState && <Main
                style={`
            ${styles.main} } `}>
                <View style={styles.main_catalog}>
                    {catalog.map(item => <CatalogItem data={item} key={item.id} />)}
                </View>
            </Main>}
            {
                mapBtnState &&
                <Image
                    style={styles.map_template}
                    source={IMAGES.map_template} />
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
