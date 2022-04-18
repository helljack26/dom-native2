import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import NoveltiesFunctionalBar from './NoveltiesFunctionalBar';
import CatalogBlockRealtor from '@/components/CatalogBlockRealtor/CatalogBlockRealtor';

export default function NoveltiesPageRealtor() {
    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <NoveltiesFunctionalBar />
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
        flex: 9,
        fontFamily: FONTS.regular,
    },
})

