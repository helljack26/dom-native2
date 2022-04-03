import FONTS from '../../res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import Header from '../../components/Header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import CatalogBlock from '../../components/CatalogBlock/CatalogBlock';

import { RecommendationMockApi } from '../../api/mock/RecommendationMockApi.jsx'
export default function HomePage({ navigation }) {

    return (
        <View style={styles.body}>
            <Header />
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBar navigation={navigation} />
                <Text style={styles.mainHeader}>
                    Рекомендации для вас
                </Text>
                <CatalogBlock data={RecommendationMockApi} catalog={false} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: FONTS.regular,
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: FONTS.regular,
    },
    mainHeader: {
        fontSize: 20,
        fontFamily: FONTS.medium,
        marginTop: 15,
        marginLeft: 15
    }
})