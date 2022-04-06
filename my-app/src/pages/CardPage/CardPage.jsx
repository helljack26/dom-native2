import FONTS from '../../res/fonts'
import IMAGES from '../../res/images'
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {
    useRef, useEffect
} from 'react';
import { useScrollToTop } from '@react-navigation/native';
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

import { ApartmentMockApi } from '../../api/mock/ApartmentMockApi.jsx'


export default function CardPage({ route, navigation }) {
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
            case 'Квартиры':
                return ApartmentMockApi;
            default:
                break;
        }
    }
    const catalogDefined = whichCatalog(category)
    const cardDetails = catalogDefined.find((item) => item.id === Number(itemId) && item);

    const { id, photoLargePath } = cardDetails;
    return (<SafeAreaView style={styles.body}

    >
        <Header />
        <Main
            ref={scrollViewRef}
            horizontal={false}
            style={styles.container}>
            <Breadcrumbs goBack={true} />
            <CardPhotoContainer photoCollection={photoLargePath} />
            <CardDetailsContainer details={cardDetails} />
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