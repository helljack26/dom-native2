import React from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Header from '../../components/Header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Recommendation from '../../components/Recommendation/Recommendation';

export default function HomePage() {
    let [fontsLoaded] = useFonts({
        'Rubik-Light': require('../../../assets/fonts/Rubik-Light.otf'),
        'Rubik-Regular': require('../../../assets/fonts/Rubik-Regular.otf'),
        'Rubik-Medium': require('../../../assets/fonts/Rubik-Medium.otf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <>
            <ScrollView
                horizontal={false}
                style={styles.body}
            >
                <Header />
                <CategoriesBar />
                <Recommendation />
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
    },
})