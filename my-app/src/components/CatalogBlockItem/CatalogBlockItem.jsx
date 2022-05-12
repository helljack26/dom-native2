import React from 'react';

import IMAGES from '@/res/images'
const { ViewIcon, HeartSmallIcon } = IMAGES;

import { useNavigation } from '@react-navigation/native';

import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton';
import ShareButton from '@/components/Buttons/ShareButton/ShareButton';

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

// Styles
import { styleRecommendationItem } from './styleRecommendationItem'
import { styleCatalogItem } from './styleCatalogItem'
const CatalogBlockItem = ({ data, percentButton, isRecommendation }) => {
    const isRealtor = percentButton !== undefined ? true : false;

    const isRealtorScreen = isRealtor ? 'ScreenRealtor' : 'ScreenUser'
    const isRealtorLink = isRealtor ? 'CardPageRealtor' : 'CardPage'
    const isRealtorHeight = isRealtor ? '97px' : '64px'

    // StyleSheet defined first check if recommendation block and after block realtor or user
    const style = isRecommendation !== undefined ? styleRecommendationItem : styleCatalogItem;
    // const style = styleRecommendationItem;
    const {
        СatalogItem,
        CatalogItemImageBlock,
        AbsoluteStatusNew,
        AbsoluteStatusSale,
        AbsoluteStatusText,
        CatalogItemImage,
        PriceBlock,
        NewPrice,
        OldPrice,
        Price,
        DetailsBtnBlock,
        CatalogItemInfo,
        CatalogItemInfoBlock,
        CatalogItemInfoName,
        CatalogItemInfoNameText,
        CatalogItemInfoPlace,
        CatalogItemInfoSize,
        CatalogItemFooter,
        CatalogItemFooterBlock,
        CatalogItemFooterBlockItem,
        CatalogItemFooterBlockItemText,
        CatalogItemFooterLink,
        CatalogItemFooterLinkText,
    } = style;

    // Data
    const {
        id,
        name,
        price,
        oldPrice,
        category,
        location,
        complexName,
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

    return (
        <СatalogItem>
            <CatalogItemImageBlock
                onPress={() => {
                    navigation.navigate(isRealtorScreen, {
                        screen: isRealtorLink,
                        params: {
                            itemId: id,
                            category: category,
                        }
                    });
                }}
            >

                {/* Label new or disconts */}
                {itemStatus !== undefined ?
                    itemStatus === 'Новинка' ?
                        <AbsoluteStatusNew>
                            <AbsoluteStatusText>
                                {itemStatus}
                            </AbsoluteStatusText>
                        </AbsoluteStatusNew>
                        :
                        <AbsoluteStatusSale>
                            <AbsoluteStatusText>
                                {itemStatus}
                            </AbsoluteStatusText>
                        </AbsoluteStatusSale>
                    :
                    null
                }

                {/* Item image */}
                <CatalogItemImage source={photoSmallPath} resizeMode="stretch" />
            </CatalogItemImageBlock>

            {/* Item Name */}
            <CatalogItemInfo isRealtorPaddingRight={isRealtor}>
                <CatalogItemInfoBlock
                    isRealtorHeight={isRealtorHeight}
                    isRealtorPaddingRight={isRealtor}
                >
                    {/* Price */}
                    {oldPrice !== undefined && price !== undefined ?
                        <PriceBlock>
                            {price !== undefined && <NewPrice>{spacedPrice} $</NewPrice>}
                            {oldPrice !== undefined && <OldPrice>{spacedOldPrice} $</OldPrice>}
                        </PriceBlock>
                        :
                        price !== undefined && <Price>{spacedPrice} $</Price>
                    }
                    {/* Name */}
                    {name !== undefined && <CatalogItemInfoName
                        onPress={() => {
                            navigation.navigate(isRealtorScreen, {
                                screen: isRealtorLink,
                                params: {
                                    itemId: id,
                                    category: category,
                                }
                            });
                        }} >
                        <CatalogItemInfoNameText>
                            {name}
                        </CatalogItemInfoNameText>
                    </CatalogItemInfoName>}

                    {/* Complex name */}
                    {complexName !== undefined && <CatalogItemInfoPlace>{complexName}</CatalogItemInfoPlace>}

                    {/* Location */}
                    {location !== undefined && <CatalogItemInfoPlace>{location}</CatalogItemInfoPlace>}

                    {/* Size */}
                    {size !== undefined && <CatalogItemInfoSize>{size}</CatalogItemInfoSize>}
                </CatalogItemInfoBlock>

                {/* Footer */}
                <CatalogItemFooter>
                    <CatalogItemFooterBlock>

                        {favoriteNumber !== undefined && <CatalogItemFooterBlockItem>
                            <HeartSmallIcon width={10} />
                            <CatalogItemFooterBlockItemText ellipsizeMode='clip' numberOfLines={1}  >
                                {favoriteNumber}
                            </CatalogItemFooterBlockItemText>
                        </CatalogItemFooterBlockItem >}

                        {viewNumber !== undefined && <CatalogItemFooterBlockItem>
                            <ViewIcon />
                            <CatalogItemFooterBlockItemText ellipsizeMode='clip' numberOfLines={1}  >
                                {viewNumber}
                            </CatalogItemFooterBlockItemText>
                        </CatalogItemFooterBlockItem >}

                    </CatalogItemFooterBlock>
                    <CatalogItemFooterLink
                        onPress={() => {
                            navigation.navigate(isRealtorScreen, {
                                screen: isRealtorLink,
                                params: {
                                    itemId: id,
                                    category: category,
                                }
                            });
                        }}
                    >
                        <CatalogItemFooterLinkText>
                            Подробнее &gt;
                        </CatalogItemFooterLinkText>
                    </CatalogItemFooterLink>
                </CatalogItemFooter>

                {/* Buttons  */}
                <DetailsBtnBlock>
                    {percentButton !== undefined && percentButton}
                    <ShareButton isBig={false} isRecommendation={isRecommendation} />
                    <AddToFavoriteButton inFavorite={inFavorite} isBig={false} isRecommendation={isRecommendation} />
                </DetailsBtnBlock>
            </CatalogItemInfo>

        </СatalogItem>
    )
}
export default CatalogBlockItem;
