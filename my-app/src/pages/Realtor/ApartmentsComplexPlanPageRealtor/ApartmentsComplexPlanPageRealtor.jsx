import F from '@/res/fonts'

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { apiMocks } from '@/api/mock/apiMocks'

import PlanFiltersMobile from '@/components/ComplexPlanPage/PlanFiltersMobile/PlanFiltersMobile'
import PlanChessRealtor from '@/components/ComplexPlanPage/PlanChessRealtor/PlanChessRealtor'

import IMAGES from '@/res/images'
// Styles
import { style } from './style.js'
const {
    Main,
    PlanHeader,
    PlanHeaderNameBlock,
    PlanHeaderName,
    PlanHeaderComplex,
    DoneLabel,
    LabelText,
    ExpiryDateLabel,
    PlanChessContainer,
    ContainerBlockBorder,
    PlanHeaderBackButtonMobile,
    PlanHeaderBackButtonMobileText,
} = style;

const { ArrowLeft } = IMAGES;
export default function ApartmentsComplexPlanPageRealtor() {
    const navigation = useNavigation();

    const route = useRoute();
    const { complexId, planId } = route.params;

    const complexApi = apiMocks.ApartmentComplexMockApi;
    const cardDetails = complexApi.find((item) => item.complexId === Number(complexId) && item);
    const planDetails = cardDetails.plans.find((item) => item.planId === Number(planId) && item);

    const {
        name
    } = cardDetails;
    const {
        planName,
        isDone,
        planEntrance,
    } = planDetails;


    return (<SafeAreaView style={styles.body}>
        <Main horizontal={false}>

            {/* Go back */}
            <PlanHeaderBackButtonMobile
                onPress={() => {
                    navigation.navigate('ApartmentsComplexPageRealtor', {
                        complexId: complexId
                    });
                }}
            >
                <ArrowLeft />
                <PlanHeaderBackButtonMobileText>
                    Вернуться к карточке ЖК
                </PlanHeaderBackButtonMobileText>
            </PlanHeaderBackButtonMobile>

            {/* Header */}
            <PlanHeader>

                <PlanHeaderNameBlock>
                    <PlanHeaderName>
                        {planName}
                    </PlanHeaderName>

                    {isDone !== undefined ? (
                        isDone === true ?
                            <DoneLabel>
                                <LabelText>
                                    Сдан
                                </LabelText>
                            </DoneLabel>
                            :
                            <ExpiryDateLabel>
                                <LabelText>
                                    {isDone}
                                </LabelText>
                            </ExpiryDateLabel>)
                        : null}
                </PlanHeaderNameBlock>

                <PlanHeaderComplex>{name}</PlanHeaderComplex>

            </PlanHeader>

            {/* Filters */}
            <PlanFiltersMobile />

            {/* Chess plan */}
            <PlanChessContainer>

                <PlanChessRealtor planEntrance={planEntrance} />
                <ContainerBlockBorder></ContainerBlockBorder>
            </PlanChessContainer>
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