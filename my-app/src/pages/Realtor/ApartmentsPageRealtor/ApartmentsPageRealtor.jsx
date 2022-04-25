import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import AdsFunctionalBar from '@/components/AdsFunctionalBar/AdsFunctionalBar';
import CatalogBlockRealtor from '@/components/CatalogBlockRealtor/CatalogBlockRealtor';

export default function ApartmentsPageRealtor() {
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

