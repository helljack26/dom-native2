import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import CategoriesBarRealtor from '@/components/CategoriesBarRealtor/CategoriesBarRealtor';
import CatalogBlockRealtor from '@/components/CatalogBlockRealtor/CatalogBlockRealtor';

export default function HomePageRealtor() {

    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBarRealtor />
                <Text style={styles.mainHeader}>
                    Рекомендации для вас
                </Text>
                <CatalogBlockRealtor />
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
        fontFamily: FONTS.regular,
    },
    mainHeader: {
        fontSize: 20,
        fontFamily: FONTS.medium,
        marginTop: 15,
        marginLeft: 15
    }
})