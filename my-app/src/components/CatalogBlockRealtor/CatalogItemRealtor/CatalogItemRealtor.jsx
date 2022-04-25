import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'
import IMAGES from '@/res/images'
const { ViewIcon, HeartSmallIcon } = IMAGES;

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton';
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';
import ShareButton from '@/components/Buttons/ShareButton/ShareButton';

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

const AbsoluteStatus = ({ props }) => {
    const type = props === 'Новинка' ? true : false;
    return <View style={type ? styles.AbsoluteStatus_new : styles.AbsoluteStatus_sale}>
        <Text style={styles.AbsoluteStatusText}>
            {props}
        </Text>
    </View>
}
const CatalogItemRealtor = ({ data }) => {
    const { id,
        name,
        price,
        oldPrice,
        category,
        location,
        size,
        photoSmallPath,
        inFavorite,
        viewNumber,
        itemStatus,
        favoriteNumber
    } = data;
    const navigation = useNavigation();

    const spacedPrice = spaceInPriceValue(price)
    const spacedOldPrice = spaceInPriceValue(oldPrice)
    const priceBlock = oldPrice !== undefined ? (
        <View style={styles.price_block}>
            <Text style={styles.newPrice}>
                {spacedPrice} $
            </Text>
            <Text style={styles.oldPrice}>
                {spacedOldPrice} $
            </Text>
        </View>)
        :
        <View >
            <Text style={styles.price}>{spacedPrice} $</Text>
        </View>

    return (
        <View
            style={styles.catalog_item}>
            <TouchableOpacity style={styles.catalog_item_photo_container}
                onPress={() => {
                    navigation.navigate('CardPageRealtor', {
                        itemId: id,
                        category: category,
                    });
                }}
            >
                {/* Label new or disconts */}
                {itemStatus && <AbsoluteStatus props={itemStatus} />}
                <Image source={photoSmallPath} style={styles.catalog_item_photo} alt={name} />
            </TouchableOpacity>
            <View style={styles.catalog_item_info}>
                {priceBlock}
                <Text style={styles.catalog_item_info_name}>{name}</Text>
                <Text style={styles.catalog_item_info_place}>{location}</Text>
                <Text style={styles.catalog_item_info_size}>{size}</Text>
            </View>
            <View style={styles.catalog_item_buttonBlock}>
                <AddToFavoriteButton inFavorite={inFavorite} isBig={false} />
                <ShareButton isBig={false} />
                <PercentButton isBig={false} />
            </View>
            <View style={styles.catalog_item_footer}>
                <View style={styles.catalog_item_footer_block}>
                    <View style={styles.catalog_item_footer_block_info}>
                        <HeartSmallIcon width={10} />
                        <Text style={styles.catalog_item_footer_block_text} ellipsizeMode='clip' numberOfLines={1}>{favoriteNumber}</Text>
                    </View >
                    <View style={styles.catalog_item_footer_block_info}>
                        <ViewIcon />
                        <Text style={styles.catalog_item_footer_block_text} ellipsizeMode='clip' numberOfLines={1}>{viewNumber}</Text>
                    </View >
                </View>

                <TouchableOpacity
                    style={styles.catalog_item_footer_link_block}
                    onPress={() => {
                        navigation.navigate('CardPageRealtor', {
                            itemId: id,
                            category: category,
                        });
                    }}  >
                    <Text style={styles.catalog_item_footer_link}>Подробнее &gt;</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CatalogItemRealtor;

const styles = StyleSheet.create({
    catalog_item: {
        paddingBottom: 20,
        width: "100%",
    },

    catalog_item_photo_container: {
        borderColor: '#E6ECF5',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
    },
    catalog_item_photo: {
        width: '100%',
        height: 198,
        position: 'relative',
    },
    AbsoluteStatus_sale: {
        position: 'absolute',
        zIndex: 990,
        top: 11,
        left: 0,
        fontSize: 12,
        lineHeight: 17,
        paddingVertical: 9,
        paddingHorizontal: 16,
        backgroundColor: '#d30000',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AbsoluteStatus_new: {
        position: 'absolute',
        zIndex: 990,
        top: 11,
        left: 0,
        fontSize: 12,
        lineHeight: 17,
        paddingVertical: 9,
        paddingHorizontal: 16,
        backgroundColor: '#6abd24',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AbsoluteStatusText: {
        fontFamily: FONTS.medium,
        color: 'white',
    },
    catalog_item_block: {
        flex: 1,
        flexDirection: 'row'
    },
    price_block: {
        flex: 1,
        flexDirection: 'row'

    },
    price: {
        fontSize: 12,
        fontFamily: FONTS.medium,
    },
    newPrice: {
        fontSize: 12,
        marginRight: 10,
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
        paddingBottom: 8,
        borderBottomColor: COLORS.borderGray,
        borderBottomWidth: 1,
        position: 'relative'
    },
    catalog_item_buttonBlock: {
        position: 'absolute',
        top: 205,
        right: 0,
        flex: 1,
        flexDirection: 'row-reverse',
    },
    catalog_item_separate: {
        width: 14,
    },
    catalog_item_info_name: {
        fontSize: 14,
        fontFamily: FONTS.medium,
        marginBottom: 8,
        marginTop: 11,
    },
    catalog_item_info_place: {
        fontSize: 10,
        fontFamily: FONTS.light,
        marginBottom: 4,
    },
    catalog_item_info_size: {
        fontSize: 10,
        fontFamily: FONTS.light
    },
    catalog_item_footer: {
        marginTop: 8,
        flex: 1,
        flexDirection: 'row',
    },
    catalog_item_footer_block: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    catalog_item_footer_block_info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
    },
    catalog_item_footer_block_text: {
        fontSize: 10,
        fontFamily: FONTS.light,
        color: COLORS.mainBlack,
        marginHorizontal: 5,
    },
    catalog_item_footer_link_block: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    catalog_item_footer_link: {
        fontSize: 10,
        fontFamily: FONTS.medium,
        color: COLORS.mainBlue,
    },
});