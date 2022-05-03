import React from 'react';
import { SafeAreaView } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { apiMocks } from '@/api/mock/apiMocks'

import PlanHeaderSelect from '@/components/ComplexPlanPage/PlanHeaderSelect/PlanHeaderSelect'
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
    const complexDetails = complexApi.find((item) => item.complexId === Number(complexId) && item);
    const planDetails = complexDetails.plans.find((item) => item.planId === Number(planId) && item);

    const {
        name
    } = complexDetails;
    const {
        planName,
        isDone,
        planEntrance,
    } = planDetails;

    // const forChessItemHashUrl = {
    //     complexId: complexId,
    //     planId: planId,
    // }

    return (<SafeAreaView >
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

            {/* Chess select */}
            <PlanHeaderSelect
                complexDetails={complexDetails}
                currentPlanName={planName}
                screen={'ScreenRealtor'}
                planPageLink={'ApartmentsComplexPlanPageRealtor'}
            />

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
