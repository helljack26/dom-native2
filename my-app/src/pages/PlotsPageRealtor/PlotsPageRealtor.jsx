import React from 'react';

import FONTS from '@/res/fonts'
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import AdsFunctionalBar from '@/components/AdsFunctionalBar/AdsFunctionalBar';
import CatalogBlockRealtor from '@/components/CatalogBlockRealtor/CatalogBlockRealtor';


export default function PlotsPageRealtor() {

    return (
        <View style={styles.body}>

            <ScrollView
                horizontal={false}
                style={styles.container}>
                <AdsFunctionalBar />
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