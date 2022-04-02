import FONTS from '../../res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from '../../components/Header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Recommendation from '../../components/Recommendation/Recommendation';

export default function HomePage({ navigation }) {


    return (
        <View style={styles.body}>
            <Header />
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBar navigation={navigation} />
                <Recommendation />
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
})