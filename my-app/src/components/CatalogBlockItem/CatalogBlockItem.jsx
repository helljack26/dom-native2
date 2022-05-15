import React from 'react';

import { useNavigation } from '@react-navigation/native';

import FavoriteAndViewNumBlock from "@/components/FavoriteAndViewNumBlock";
import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton';
import ShareButton from '@/components/Buttons/ShareButton/ShareButton';

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

// Styles
import { styleRecommendationItem } from './styleRecommendationItem'
import { styleCatalogItem } from './styleCatalogItem'
const CatalogBlockItem = ({ data, percentButton, isRecommendation }) => {
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
        CatalogItemFooterLink,
        CatalogItemFooterLinkText,
    } = style;

    // Data
    const {
        id,
        complexId,
        adTitle,
        price,
        oldPrice,
        category,
        location,
        complexName,
        size,
        imagePath,
        inFavorite,
        viewNumber,
        itemStatus,
        plans,
        favoriteNumber
    } = data;

    const isRealtor = percentButton !== undefined ? true : false;

    const isRealtorScreen = isRealtor ? 'ScreenRealtor' : 'ScreenUser'
    const isRealtorCardLink = isRealtor ? 'CardPageRealtor' : 'CardPage'
    const isRealtorComplexLink = isRealtor ? 'ApartmentsComplexPageRealtor' : 'ApartmentsComplexPage'

    const isComplexLink = plans !== undefined ? isRealtorComplexLink : isRealtorCardLink
    const isComplexId = plans !== undefined ? complexId : id

    const isRealtorHeight = isRealtor ? '97px' : '64px'

    const navigation = useNavigation();

    const spacedPrice = spaceInPriceValue(price)
    const spacedOldPrice = spaceInPriceValue(oldPrice)

    return (
        <СatalogItem>
            <CatalogItemImageBlock
                onPress={() => {
                    navigation.navigate(isRealtorScreen, {
                        screen: isComplexLink,
                        params: {
                            itemId: isComplexId,
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
                <CatalogItemImage source={imagePath[0]} resizeMode="stretch" />
            </CatalogItemImageBlock>

            {/* Item adTitle */}
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
                    {/* adTitle */}
                    {adTitle !== undefined && <CatalogItemInfoName
                        onPress={() => {
                            navigation.navigate(isRealtorScreen, {
                                screen: isComplexLink,
                                params: {
                                    itemId: isComplexId,
                                    category: category,
                                }
                            });
                        }} >
                        <CatalogItemInfoNameText>
                            {adTitle}
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

                        <FavoriteAndViewNumBlock
                            favoriteNumber={favoriteNumber}
                            viewNumber={viewNumber}
                        />

                    </CatalogItemFooterBlock>
                    <CatalogItemFooterLink
                        onPress={() => {
                            navigation.navigate(isRealtorScreen, {
                                screen: isComplexLink,
                                params: {
                                    itemId: isComplexId,
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
