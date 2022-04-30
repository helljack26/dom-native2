import F from '@/res/fonts'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import CategoriesBar from '@/components/CategoriesBar/CategoriesBar';
import CatalogBlock from '@/components/CatalogBlock/CatalogBlock';

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
                <CatalogBlock isRecommendation={true} />
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
    mainHeaderUser: {
        fontSize: 20,
        fontFamily: F.medium,
        marginTop: 15,
        marginLeft: 15
    }
})