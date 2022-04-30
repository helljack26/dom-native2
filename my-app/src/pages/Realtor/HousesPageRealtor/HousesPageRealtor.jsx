import React from 'react';

import F from '@/res/fonts'
import { StyleSheet, ScrollView, View } from 'react-native';

import AdsFunctionalBar from '@/components/AdsFunctionalBar/AdsFunctionalBar';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';

export default function HousesPageRealtor() {
    const percentButton = <PercentButton isBig={false} />

    return (
        <View style={styles.body}>
            <ScrollView horizontal={false} style={styles.container}>
                <AdsFunctionalBar />
                <CatalogBlock percentButton={percentButton} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: F.regular,
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: F.regular,
    },
})