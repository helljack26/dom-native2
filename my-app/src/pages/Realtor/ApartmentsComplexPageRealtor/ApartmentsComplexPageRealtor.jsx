import F from '@/res/fonts'

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';

import Breadcrumbs from '@/components/Breadcrumbs'
import CardPhotoContainer from '@/components/Card/CardPhotoContainer/CardPhotoContainer'
import ComplexDetailsRealtor from '@/components/Complex/ComplexDetailsRealtor/ComplexDetailsRealtor'
import ComplexDetailsPlans from '@/components/Complex/ComplexDetailsPlans/ComplexDetailsPlans'

import CardSaveButton from '@/components/Card/CardSaveButton/CardSaveButton'
import CardSimilarObject from '@/components/Card/CardSimilarObject/CardSimilarObject'
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';

import { apiMocks } from '@/api/mock/apiMocks'

import { style } from './style.js'
const {
    Main
} = style;

export default function ApartmentsComplexPageRealtor() {
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

    const percentButton = <PercentButton isBig={false} />

    return (
        <SafeAreaView style={styles.body}>
            <Main ref={scrollViewRef} horizontal={false}>

                <Breadcrumbs goBack={true} />
                <CardPhotoContainer photoCollection={photoLargePath} />
                <ComplexDetailsRealtor details={objectDetails} />
                <ComplexDetailsPlans details={objectDetails} role={'Realtor'} />

                <CardSaveButton />
                <CardSimilarObject percentButton={percentButton} />

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