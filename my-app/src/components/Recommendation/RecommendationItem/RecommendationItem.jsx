import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import AddToFavoriteButton from '../../AddToFavoriteButton/AddToFavoriteButton';

const RecommendationItem = ({ data }) => {
    const { name, price, oldPrice, place, size, photoPath, inFavorite } = data;
    let [fontsLoaded] = useFonts({
        'Light': require('../../../../assets/fonts/Rubik-Light.otf'),
        'Regular': require('../../../../assets/fonts/Rubik-Regular.otf'),
        'Medium': require('../../../../assets/fonts/Rubik-Medium.otf')
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const priceBlock = oldPrice !== undefined ? (
        <View style={styles.priceBlock}>
            <Text style={styles.newPrice}> {price}</Text>
            <Text style={styles.oldPrice}>
                {oldPrice}
            </Text>
        </View>)
        :
        <View style={styles.priceBlock}>
            <Text style={styles.price}>{price}</Text>
        </View>

    return (
        <View style={styles.recommendation_item}>
            <Image source={photoPath} style={styles.recommendation_item_photo} alt={name} />
            <View style={styles.recommendation_item_block}>
                {priceBlock}
                <AddToFavoriteButton inFavorite={inFavorite} />
            </View>
            <View style={styles.recommendation_item_info}>
                <Text style={styles.recommendation_item_info_name}>{name}</Text>
                <Text style={styles.recommendation_item_info_place}>{place}</Text>
                <Text style={styles.recommendation_item_info_size}>{size}</Text>
            </View>
        </View>
    )
}
export default RecommendationItem;

const styles = StyleSheet.create({
    recommendation_item: {
        paddingBottom: 20,
    },
    recommendation_item_photo: {
        width: '100%',
        height: 170,
        borderRadius: 10,
        marginBottom: 10,
    },
    recommendation_item_block: {
        flex: 1,
        flexDirection: 'row'
    },
    priceBlock: {
        flex: 1,
        flexDirection: 'row',
    },
    price: {
        fontSize: 15,
        fontFamily: "Medium"
    },
    newPrice: {
        marginRight: 13,
        color: "#0072db",
        fontFamily: "Medium"
    },
    oldPrice: {
        fontFamily: "Medium",
        textDecorationLine: "line-through"
    },
    recommendation_item_info: {
        flex: 1,
        flexDirection: "column",
    },
    recommendation_item_info_name: {
        fontSize: 19,
        fontFamily: "Medium",
        marginBottom: 9,
        marginTop: 10,
    },
    recommendation_item_info_place: {
        fontSize: 11.5,
        fontFamily: "Light",
        marginBottom: 5
    },
    recommendation_item_info_size: {
        fontSize: 11.5,
        fontFamily: "Light"
    },
});