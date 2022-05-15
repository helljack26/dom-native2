import React from "react";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FavoriteAndViewNumBlock from "@/components/FavoriteAndViewNumBlock";
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';
import CardSaveButton from "@/components/Card/CardSaveButton/CardSaveButton";

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

// Images
import IMAGES from '@/res/images'
const {
    ArchiveIcon,
    RenameIcon,
    CrossIcon,
} = IMAGES;

// Styles
import { style } from './style.js'
const {
    ItemContainer,
    ItemContainerBlock,
    ItemContainerItemCol,
    ItemColImageBlock,
    ItemColInfoBlock,
    PriceBlock,
    NewPrice,
    OldPrice,
    Price,
    CatalogItemInfoName,
    CatalogItemInfoNameText,
    CatalogItemInfoPlace,
    CatalogItemInfoSize,
    ItemColRightBlock,
    ItemColRightBlockButtons,
    // MessageButton,
    // MessageButtonImage,
    // MessageButtonText,
    ItemContainerFooter,
    ItemContainerFooterButtons,
    FooterButton,
    FooterButtonText,
} = style;

const ObjectDataItem = ({ data, isActiveObject }) => {
    const navigation = useNavigation();

    const {
        id,
        complexId,
        adTitle,
        category,
        oldPrice,
        price,
        complexName,
        location,
        size,
        imagePath,
        favoriteNumber,
        viewNumber,
        plans,
        // percentageText,
    } = data;

    // const messageNumber = 0;

    const spacedPrice = spaceInPriceValue(price)
    const spacedOldPrice = spaceInPriceValue(oldPrice)

    const isComplexLink = plans !== undefined ? 'ApartmentsComplexPageRealtor' : 'CardPageRealtor'
    const isComplexId = plans !== undefined ? complexId : id

    return (
        <ItemContainer>
            <ItemContainerBlock>

                <ItemColImageBlock
                    onPress={() => {
                        navigation.navigate('ScreenRealtor', {
                            screen: isComplexLink,
                            params: {
                                itemId: isComplexId,
                                category: category,
                            }
                        });
                    }}
                >
                    <Image source={imagePath[0]}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='stretch' />
                </ItemColImageBlock>

                <ItemContainerItemCol>
                    <ItemColInfoBlock>

                        {oldPrice !== undefined ? <PriceBlock >
                            {price !== undefined && <NewPrice>{spacedPrice} $</NewPrice>}
                            {oldPrice !== undefined && <OldPrice>{spacedOldPrice} $</OldPrice>}
                        </PriceBlock>
                            :
                            price !== undefined &&
                            <Price>
                                {plans !== undefined && 'от '}
                                {spacedPrice} $
                            </Price>
                        }

                        <CatalogItemInfoName
                            onPress={() => {
                                navigation.navigate('ScreenRealtor', {
                                    screen: isComplexLink,
                                    params: {
                                        itemId: isComplexId,
                                        category: category,
                                    }
                                });
                            }}
                        >
                            <CatalogItemInfoNameText>
                                {adTitle}
                            </CatalogItemInfoNameText>
                        </CatalogItemInfoName>

                        {complexName !== undefined && <CatalogItemInfoPlace>{complexName}</CatalogItemInfoPlace>}

                        {location !== undefined && <CatalogItemInfoPlace>{location}</CatalogItemInfoPlace>}

                        {size !== undefined && <CatalogItemInfoSize>{size}</CatalogItemInfoSize>}

                    </ItemColInfoBlock>

                    <ItemColRightBlock>

                        <FavoriteAndViewNumBlock
                            favoriteNumber={favoriteNumber}
                            viewNumber={viewNumber}
                            isForCard={true}
                        />

                        <ItemColRightBlockButtons>

                            <PercentButton isBig={true} />
                            {/* 
                            <MessageButton
                                isActive={false}
                            >
                                <MessageButtonImage
                                    isActive={false}
                                    buttonImage={IMAGES.ChatDefaultIcon}
                                ></MessageButtonImage>

                                <MessageButtonText isActive={false}>
                                    Сообщения: {messageNumber}
                                </MessageButtonText>

                            </MessageButton> */}

                        </ItemColRightBlockButtons>

                    </ItemColRightBlock>

                </ItemContainerItemCol>

            </ItemContainerBlock>

            <ItemContainerFooter>
                <CardSaveButton isForAccount={true} />

                <ItemContainerFooterButtons>

                    {isActiveObject && <FooterButton  >
                        <ArchiveIcon height={13} width={13} />
                        <FooterButtonText>Архивировать</FooterButtonText>
                    </FooterButton>}

                    {!isActiveObject && <FooterButton isActive={true}>
                        <FooterButtonText isActive={true}>Активировать</FooterButtonText>
                    </FooterButton>}


                    <FooterButton >
                        <RenameIcon height={13} width={13} />
                        <FooterButtonText >Редактировать</FooterButtonText>
                    </FooterButton>

                    <FooterButton >
                        <CrossIcon height={10} width={10} />
                        <FooterButtonText >Удалить</FooterButtonText>
                    </FooterButton>

                </ItemContainerFooterButtons>

            </ItemContainerFooter>
        </ItemContainer>
    )
}
export default ObjectDataItem;