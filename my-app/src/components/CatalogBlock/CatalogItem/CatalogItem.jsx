import FONTS from '../../../res/fonts'
import COLORS from '../../../res/colors'
import IMAGES from '../../../res/images'
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PercentIcon = IMAGES.percent_icon;
const ViewIcon = IMAGES.view_icon;
const FavoriteSmallIcon = IMAGES.heart_small_icon;
import AddToFavoriteButton from '../../AddToFavoriteButton/AddToFavoriteButton';

const CatalogItem = ({ data, navigation }) => {
    const { id, name, price, oldPrice, category, location, size, photoSmallPath, inFavorite, viewNumber, favoriteNumber } = data;

    const priceBlock = oldPrice !== undefined ? (
        <View >
            <Text style={styles.newPrice}>
                {price}
            </Text>
            <Text style={styles.oldPrice}>
                {oldPrice}
            </Text>
        </View>)
        :
        <View >
            <Text style={styles.price}>{price}</Text>
        </View>

    return (
        <View
            style={styles.catalog_item}>
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
                    style={styles.catalog_item_photo} alt={name} />
            </TouchableOpacity>
            <View style={styles.catalog_item_info}>
                <Text style={styles.catalog_item_info_name}>{name}</Text>
                {priceBlock}
                <Text style={styles.catalog_item_info_place}>{location}</Text>
                <Text style={styles.catalog_item_info_size}>{size}</Text>
            </View>
            <View style={styles.catalog_item_buttonBlock}>
                <AddToFavoriteButton inFavorite={inFavorite} isBig={false} />
                <View style={styles.catalog_item_separate}></View>
                <TouchableOpacity>
                    <PercentIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.catalog_item_footer}>
                <View style={styles.catalog_item_footer_block}>
                    <View style={styles.catalog_item_footer_block_info}>
                        <FavoriteSmallIcon />
                        <Text style={styles.catalog_item_footer_block_text}>{favoriteNumber}</Text>
                    </View >
                    <View style={styles.catalog_item_footer_block_info}>
                        <ViewIcon />
                        <Text style={styles.catalog_item_footer_block_text}>{viewNumber}</Text>
                    </View >
                </View>
                {/* TODO добавить здесь переход на обьект */}
                <TouchableOpacity
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('CardPage', {
                            itemId: id
                        });
                    }}
                >
                    <Text style={styles.catalog_item_footer_link}>Подробнее &gt;</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CatalogItem;

const styles = StyleSheet.create({
    catalog_item: {
        paddingBottom: 20,
        width: "48.5%",
    },

    catalog_item_photo_container: {
        borderColor: '#E6ECF5',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        overflow: 'hidden'
    },
    catalog_item_photo: {
        width: '100%',
        height: 100,
    },
    catalog_item_block: {
        flex: 1,
        flexDirection: 'row'
    },
    price: {
        fontSize: 12,
        fontFamily: FONTS.medium
    },
    newPrice: {
        fontSize: 12,
        color: "#0072db",
        fontFamily: FONTS.medium
    },
    oldPrice: {
        fontSize: 12,
        fontFamily: FONTS.medium,
        textDecorationLine: "line-through"
    },
    catalog_item_info: {
        width: '100%',
        paddingRight: '20%',
        flex: 1,
        flexDirection: "column",
        paddingBottom: 6,
        borderBottomColor: COLORS.borderGray,
        borderBottomWidth: 1,
        position: 'relative'
    },
    catalog_item_buttonBlock: {
        position: 'absolute',
        top: 113,
        right: 0
    },
    catalog_item_separate: {
        height: 7,
    },
    catalog_item_info_name: {
        fontSize: 14.5,
        fontFamily: FONTS.light,
        marginBottom: 7,
        marginTop: 10,
    },
    catalog_item_info_place: {
        fontSize: 10,
        fontFamily: FONTS.light,
        marginBottom: 4,
        marginTop: 8,
    },
    catalog_item_info_size: {
        fontSize: 10,
        fontFamily: FONTS.light
    },
    catalog_item_footer: {
        marginTop: 9,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    catalog_item_footer_block: {
        width: '50%',
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center'

    },
    catalog_item_footer_block_info: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    catalog_item_footer_block_text: {
        fontSize: 10,
        fontFamily: FONTS.light,
        color: COLORS.mainBlack,
        marginLeft: 5,
    },
    catalog_item_footer_link: {
        fontSize: 10,
        fontFamily: FONTS.medium,
        color: COLORS.mainBlue,
    },
});