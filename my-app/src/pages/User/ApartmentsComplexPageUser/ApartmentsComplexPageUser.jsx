import React from 'react';
import {  SafeAreaView } from 'react-native';
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

import styled from 'styled-components/native';

const Main = styled.ScrollView`
width: 100%;
background-color: white;
padding: 0px 4%;
`;

export default function ApartmentsComplexPageUser() {
    const route = useRoute();
    const { complexId } = route.params;
    const scrollViewRef = useRef(null)

    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: false })
        }
    }
    if (complexId) {
        scrollTop()
    }

    const complexApi = apiMocks.ApartmentComplexMockApi;
    const objectDetails = complexApi.find((item) => item.complexId === Number(complexId) && item);

    const { photoLargePath } = objectDetails;
    return (
        <SafeAreaView >
            <Main
                ref={scrollViewRef}
                horizontal={false}>
                <Breadcrumbs goBack={true} />
                <CardPhotoContainer photoCollection={photoLargePath} />
                <ComplexDetailsUser details={objectDetails} />
                <ComplexDetailsPlans details={objectDetails} isRealtor={false}/>

                {/* Complain link */}
                <ComplainLink />
                <CardSimilarObject />
            </Main>
        </SafeAreaView >
    )
}
