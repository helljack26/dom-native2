import React from 'react';

import IMAGES from '@/res/images'
const { ViewIcon, HeartSmallIcon } = IMAGES;

import { useNavigation } from '@react-navigation/native';

import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton';
import ShareButton from '@/components/Buttons/ShareButton/ShareButton';

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

// Styles
import { styleCatalog } from './styleCatalog'
import { styleRecommendation } from './styleRecommendation'
const CatalogBlockItem = ({ data, percentButton, isRecommendation }) => {
    // StyleSheet defined
    const style = isRecommendation !== undefined ? styleRecommendation : styleCatalog;
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

    const isRealtorLink = percentButton !== undefined ? 'CardPageRealtor' : 'CardPage'
    const isRealtorHeight = percentButton !== undefined ? '97px' : '64px'

    return (
        <СatalogItem>
            <CatalogItemImageBlock
                onPress={() => {
                    navigation.navigate('ScreenUser', {
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
            <CatalogItemInfo>
                <CatalogItemInfoBlock isRealtorHeight={isRealtorHeight} >
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
                            navigation.navigate('ScreenUser', {
                                screen: isRealtorLink,
                                params: {
                                    itemId: id,
                                    category: category,
                                }
                            });
                        }}
                    >
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
                            navigation.navigate('ScreenUser', {
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
