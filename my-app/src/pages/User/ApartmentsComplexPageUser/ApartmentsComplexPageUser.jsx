import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import FONTS from '@/res/fonts'

import IMAGES from '@/res/images'
const {
    ComplainIcon,
} = IMAGES;

import Breadcrumbs from '@/components/Breadcrumbs'
import CardPhotoContainer from '@/components/Card/CardPhotoContainer/CardPhotoContainer'
import ComplexDetailsUser from '@/components/ApartmentComplex/ComplexDetailsUser/ComplexDetailsUser'

import CardSimilarObject from '@/components/Card/CardSimilarObject/CardSimilarObject'
import { apiMocks } from '@/api/mock/apiMocks'

import { style } from './style.js'
const {
    Main,
    Complain,
    Complain_link,
    Complain_link_text,
} = style;


export default function ApartmentsComplexPageUser() {
    const route = useRoute();
    const { complexId } = route.params;
    const scrollViewRef = useRef(null)

    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true })
        }
    }
    if (complexId) {
        scrollTop()
    }

    const complexApi = apiMocks.ApartmentComplexMockApi;
    const objectDetails = complexApi.find((item) => item.id === Number(complexId) && item);

    const { photoLargePath } = objectDetails;
    return (<SafeAreaView style={styles.body}>
        <Main
            ref={scrollViewRef}
            horizontal={false}>
            <Breadcrumbs goBack={true} />
            <CardPhotoContainer photoCollection={photoLargePath} />
            <ComplexDetailsUser details={objectDetails} />
            {/* Complain */}
            <Complain>
                <Complain_link>
                    <ComplainIcon width='14px' />
                    <Complain_link_text>Пожаловаться</Complain_link_text>
                </Complain_link>
            </Complain>
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