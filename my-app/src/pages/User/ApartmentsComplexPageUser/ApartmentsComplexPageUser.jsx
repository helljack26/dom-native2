import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import F from '@/res/fonts'

import Breadcrumbs from '@/components/Breadcrumbs'
import CardPhotoContainer from '@/components/Card/CardPhotoContainer/CardPhotoContainer'
import ComplexDetailsUser from '@/components/Complex/ComplexDetailsUser/ComplexDetailsUser'
import ComplexDetailsPlans from '@/components/Complex/ComplexDetailsPlans/ComplexDetailsPlans'
import ComplainLink from '@/components/Buttons/ComplainLink/ComplainLink'

import CardSimilarObject from '@/components/Card/CardSimilarObject/CardSimilarObject'
import { apiMocks } from '@/api/mock/apiMocks'

import { style } from './style.js'
const {
    Main,
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
    const objectDetails = complexApi.find((item) => item.complexId === Number(complexId) && item);

    const { photoLargePath } = objectDetails;
    return (
        <SafeAreaView style={styles.body}>
            <Main
                ref={scrollViewRef}
                horizontal={false}>
                <Breadcrumbs goBack={true} />
                <CardPhotoContainer photoCollection={photoLargePath} />
                <ComplexDetailsUser details={objectDetails} />
                <ComplexDetailsPlans details={objectDetails} role={'User'} />

                {/* Complain link */}
                <ComplainLink />
                <CardSimilarObject />
            </Main>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: F.regular,
    },
})