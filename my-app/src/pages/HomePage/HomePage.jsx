import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Header from '../../components/Header/Header';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import Recommendation from '../../components/Recommendation/Recommendation';

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
        <View style={styles.body}>
            <Header />
            <ScrollView
                horizontal={false}
                style={styles.container}
            >
                <CategoriesBar navigation={navigation} />
                <Recommendation />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: 'Regular',
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: 'Regular',
    },
})