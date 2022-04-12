import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';


import CategoriesBar from '@/components/CategoriesBar/CategoriesBar';
import RecommendationBlock from '@/components/RecommendationBlock/RecommendationBlock';

export default function HomePageUser() {

    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBar />
                <Text style={styles.mainHeaderUser}>
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
    mainHeaderUser: {
        fontSize: 20,
        fontFamily: FONTS.medium,
        marginTop: 15,
        marginLeft: 15
    }
})