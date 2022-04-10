import FONTS from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';
import AdsFunctionalBar from '@/components/AdsFunctionalBar/AdsFunctionalBar';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';

export default function CommercePageRealtor() {
    return (
        <View style={styles.body}>
            <HeaderRealtor />
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <AdsFunctionalBar />
                <CatalogBlock />
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

