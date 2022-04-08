import FONTS from '../../res/fonts'

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs'
import CardPhotoContainer from '../../components/Card/CardPhotoContainer/CardPhotoContainer'
import CardDetailsContainer from '../../components/Card/CardDetailsContainer/CardDetailsContainer'
import CardSaveButton from '../../components/Card/CardSaveButton/CardSaveButton'
import CardAgentContainer from '../../components/Card/CardAgentContainer/CardAgentContainer'
import CardSimilarObject from '../../components/Card/CardSimilarObject/CardSimilarObject'

import styled from 'styled-components/native';
const Main = styled.ScrollView`
width: 100%;
background-color: white;
padding: 0px 4%
`;

import { apiMocks } from '../../api/mock/apiMocks'

export default function CardPage() {
    const route = useRoute();
    const { itemId, category } = route.params;
    const scrollViewRef = useRef(null)

    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true })
        }
    }
    if (itemId) {
        scrollTop()
    }

    const whichCatalog = (catalogName) => {
        switch (catalogName) {
            case 'apartments':
                return apiMocks.ApartmentMockApi;
            case 'houses':
                return apiMocks.HousesMockApi;
            case 'plots':
                return apiMocks.PlotMockApi;
            default:
                break;
        }
    }
    const catalogDefined = whichCatalog(category)
    const objectDetails = catalogDefined.find((item) => item.id === Number(itemId) && item);

    const { id, photoLargePath } = objectDetails;
    return (<SafeAreaView style={styles.body}>
        <Header />
        <Main
            ref={scrollViewRef}
            horizontal={false}
            style={styles.container}>
            <Breadcrumbs goBack={true} />
            <CardPhotoContainer photoCollection={photoLargePath} />
            <CardDetailsContainer details={objectDetails} />
            <CardSaveButton />
            <CardAgentContainer agentId={id} />
            <CardSimilarObject />
        </Main>
    </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: FONTS.regular,
    },
})