import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { recommendation } from '../../api/mock/ApiTemplate.js'
import RecommendationItem from './RecommendationItem/RecommendationItem.jsx'

const Recommendation = () => {

    let [fontsLoaded] = useFonts({
        'Rubik-Light': require('../../../assets/fonts/Rubik-Light.otf'),
        'Rubik-Regular': require('../../../assets/fonts/Rubik-Regular.otf'),
        'Rubik-Medium': require('../../../assets/fonts/Rubik-Medium.otf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={styles.main}>
            <Text style={styles.mainHeader}
            >Рекомендации для вас</Text>
            <View style={styles.recommendation_block}>
                {recommendation.map(item => {
                    return <RecommendationItem data={item} key={item.id} />
                })}
            </View>
        </View>
    )
}

export default Recommendation;



const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: 15,
    },
    recommendation_block: {
        width: '100%',
    },
    mainHeader: {
        fontSize: 22,
        fontFamily: 'Rubik-Medium',
        marginVertical: 15,
    }
});
