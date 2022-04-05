import FONTS from '../../../res/fonts'
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import AddToFavoriteButton from '../../AddToFavoriteButton/AddToFavoriteButton';

const RecommendationItem = ({ data, navigation }) => {
    const { id, name, price, category, oldPrice, location, size, photoSmallPath, inFavorite } = data;
    const spaceInPriceValue = (priceValue) => {
        if (priceValue !== undefined) {
            return priceValue.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }
    }
    const spacedPrice = spaceInPriceValue(price)
    const spacedOldPrice = spaceInPriceValue(oldPrice)

    const priceBlock = oldPrice !== undefined ? (
        <View style={styles.priceBlock}>
            <Text style={styles.newPrice}>{spacedPrice} $</Text>
            <Text style={styles.oldPrice}>
                {spacedOldPrice} $
            </Text>
        </View>)
        :
        <View style={styles.priceBlock}>
            <Text style={styles.price}>{spacedPrice} $</Text>
        </View>

    return (
        <View style={styles.recommendation_item}>
            <TouchableOpacity style={styles.catalog_item_photo_container}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('CardPage', {
                        itemId: id,
                        category: category,
                    });
                }}
            >
                <Image source={photoSmallPath}

                    style={styles.recommendation_item_photo} alt={name} />
            </TouchableOpacity>
            <View style={styles.recommendation_item_block}>
                {priceBlock}
                <AddToFavoriteButton inFavorite={inFavorite} isBig={true} />
            </View>
            <View style={styles.recommendation_item_info}>
                <Text style={styles.recommendation_item_info_name}>{name}</Text>
                <Text style={styles.recommendation_item_info_place}>{location}</Text>
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
        height: 198,
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
        fontSize: 14,
        fontFamily: FONTS.medium
    },
    newPrice: {
        marginRight: 13,
        color: "#0072db",
        fontFamily: FONTS.medium
    },
    oldPrice: {
        fontFamily: FONTS.medium,
        textDecorationLine: "line-through"
    },
    recommendation_item_info: {
        flex: 1,
        flexDirection: "column",
    },
    recommendation_item_info_name: {
        fontSize: 16,
        fontFamily: FONTS.medium,
        marginBottom: 9,
        marginTop: 10,
    },
    recommendation_item_info_place: {
        fontSize: 11.5,
        fontFamily: FONTS.light,
        marginBottom: 5
    },
    recommendation_item_info_size: {
        fontSize: 11.5,
        fontFamily: FONTS.light
    },
});