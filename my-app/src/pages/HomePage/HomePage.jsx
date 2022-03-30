import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Header from '../../components/Header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Recommendation from '../../components/Recommendation/Recommendation';
import FooterNavbar from '../../components/FooterNavbar/FooterNavbar';

export default function HomePage({ navigation }) {

    let [fontsLoaded] = useFonts({
        'Light': require('../../../assets/fonts/Rubik-Light.otf'),
        'Regular': require('../../../assets/fonts/Rubik-Regular.otf'),
        'Medium': require('../../../assets/fonts/Rubik-Medium.otf'),
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
            <FooterNavbar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: 'Regular',
    },
})