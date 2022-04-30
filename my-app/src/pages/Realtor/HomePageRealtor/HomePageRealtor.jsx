import F from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import CategoriesBarRealtor from '@/components/CategoriesBarRealtor/CategoriesBarRealtor';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';

export default function HomePageRealtor() {
    const percentButton = <PercentButton isBig={false} isRecommendation={true} />

    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container} >
                <CategoriesBarRealtor />
                <Text style={styles.mainHeader}>
                    Рекомендации для вас
                </Text>
                <CatalogBlock percentButton={percentButton} isRecommendation={true} />
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
        fontFamily: F.regular,
    },
    mainHeader: {
        fontSize: 20,
        fontFamily: F.medium,
        marginTop: 15,
        marginLeft: 15
    }
})