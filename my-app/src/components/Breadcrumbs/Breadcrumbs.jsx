import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'
import IMAGES from '../../res/images'
const { ArrowLeft } = IMAGES
import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

// Styles
const GoBack = styled.TouchableOpacity`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 15px;
`;

import PageLocation from '@/components/helpers/pageLocation'
const Breadcrumbs = ({ goBack }) => {
    const { title, ads, isRealtor } = PageLocation();
    const navigation = useNavigation();

    const isAds = ads &&
        <View style={styles.breadcrumbs}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.ads}>Объявления&nbsp; | &nbsp;</Text>
            </TouchableOpacity>
            <Text style={styles.page}>{title}</Text>
        </View>;
    const isAdsRealtor = ads &&
        <View style={styles.breadcrumbs}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeRealtor')}>
                <Text style={styles.ads}>Объявления&nbsp; | &nbsp;</Text>
            </TouchableOpacity>
            <Text style={styles.page}>{title}</Text>
        </View>;

    const isGoBack = goBack &&
        <GoBack
            style={styles.breadcrumbs_goBack}
            onPress={() => navigation.goBack()}>
            <ArrowLeft />
            <Text style={styles.goBack}>Вернуться назад</Text>
        </GoBack>
    const isGoBackRealtor = goBack &&
        <GoBack
            style={styles.breadcrumbs_goBack}
            onPress={() => navigation.goBack()}>
            <ArrowLeft />
            <Text style={styles.goBack}>Вернуться назад</Text>
        </GoBack>

    const breadcrumbs = !goBack ? isAds : isGoBack
    const breadcrumbsRealtor = !goBack ? isAdsRealtor : isGoBackRealtor

    return isRealtor ? breadcrumbsRealtor : breadcrumbs

}
export default Breadcrumbs;

const styles = StyleSheet.create({
    goBack: {
        marginLeft: 10,
        color: COLORS.mainBlack,
        fontSize: 12,
        fontFamily: FONTS.light
    },
    breadcrumbs: {
        flex: 1,
        flexDirection: 'row'
    },
    ads: {
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: COLORS.secondBlack,
    },
    page: {
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: COLORS.mainBlack,
    }
})