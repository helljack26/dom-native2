import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';
import CategoriesBar from '@/components/CategoriesBar/CategoriesBar';
import RecommendationBlock from '@/components/RecommendationBlock/RecommendationBlock';

export default function HomePageRealtor() {

    return (
        <View style={styles.body}>
            <HeaderRealtor />
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBar />
                <Text style={styles.mainHeader}>
                    Рекомендации для вас
                </Text>
                <RecommendationBlock />
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