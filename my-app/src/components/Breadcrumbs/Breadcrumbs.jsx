import { R } from '@/res/R.js'
const ArrowLeftIcon = R.IMAGES.arrow_left;

import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
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
    const { title, ads } = PageLocation();
    const navigation = useNavigation();

    const isAds = ads &&
        <View style={styles.breadcrumbs}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.ads}>Объявления&nbsp; | &nbsp;</Text>
            </TouchableOpacity>
            <Text style={styles.page}>{title}</Text>
        </View>;

    const isGoBack = goBack &&
        <GoBack
            style={styles.breadcrumbs_goBack}
            onPress={() => navigation.goBack()}>
            <ArrowLeftIcon />
            <Text style={styles.goBack}>Вернуться назад</Text>
        </GoBack>

    const breadcrumbs = !goBack ? isAds : isGoBack

    return breadcrumbs

}
export default Breadcrumbs;

const styles = StyleSheet.create({
    goBack: {
        marginLeft: 10,
        color: R.COLORS.mainBlack,
        fontSize: 12,
        fontFamily: R.FONTS.light
    },
    breadcrumbs: {
        flex: 1,
        flexDirection: 'row'
    },
    ads: {
        fontSize: 12,
        fontFamily: R.FONTS.regular,
        color: R.COLORS.secondBlack,
    },
    page: {
        fontSize: 12,
        fontFamily: R.FONTS.regular,
        color: R.COLORS.mainBlack,
    }
})