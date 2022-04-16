import IMAGES from '@/res/images'

import React from 'react';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';

import CatalogItemRealtor from './CatalogItemRealtor/CatalogItemRealtor.jsx'

import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';

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
const CatalogBlockRealtor = observer(() => {
    const { isGallery, catalog, setCatalog } = useCatalogApiStore();

    const route = useRoute();
    useEffect(() => {
        if (route.name) {
            setCatalog(route.name);
        }
    }, [route]);
    return (
        <>
            {isGallery &&
                <Main style={`${styles.main}`}>
                    {/* ApartmentsPage render item in two column */}
                    <View style={styles.main_other}>
                        {catalog.map(item => <CatalogItemRealtor data={item} key={item.id} />)}
                    </View>
                </Main>}
            {isGallery === false &&
                <Image
                    style={styles.map_template}
                    source={IMAGES.map_template} />
            }
        </>
    )
})

export default CatalogBlockRealtor;

const styles = StyleSheet.create({
    main_catalog: {
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        height: '100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    main_other: {
        width: '100%',
        flexDirection: "column",
        height: '100%',
        flex: 1,
        alignContent: 'center',
    },
    map_template: {
        marginTop: 15,
    }
});
