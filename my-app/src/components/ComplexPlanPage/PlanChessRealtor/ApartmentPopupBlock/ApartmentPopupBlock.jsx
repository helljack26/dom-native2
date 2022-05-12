import React from "react";
import { useRef, useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Image, Text, Pressable, View } from "react-native";
import { toJS } from "mobx";
import { usePopupStore } from '@/stores/popupStore';
// import { useScrollIntoView } from 'react-native-scroll-into-view';

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'
import { observer } from "mobx-react-lite";
import PercentButton from '@/components/Buttons/PercentButton/PercentButton';
import ShareButton from '@/components/Buttons/ShareButton/ShareButton';
import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton'

// Images
import IMAGES from '@/res/images'

// Styles
import { style } from './style'
// Styles
const {
    Popup,
    PopupBlock,
    PopupHeader,
    PopupHeaderNumber,
    PopupContainer,
    PopupHeaderClose,
    PopupImageBlock,
    PopupDetails,
    PopupDetailsCol,
    PopupDetailsPrice,
    PopupDetailsName,
    PopupDetailsArea,
    PopupDetailsButtons,
    PopupFooter,
    PopupFooterBlock,
    PopupFooterInfo,
    PopupFooterInfoText,
    PopupFooterLink,
    PopupFooterLinkText,
} = style;
const { HeartSmallIcon, ViewIcon, CrossBlueIcon } = IMAGES;

const ApartmentPopupBlock = observer((props) => {
    const { popupData, popupClientLeft } = usePopupStore();
    const data = toJS(popupData)
    console.log('levfff', popupClientLeft);
    // Props
    const {
        scrollWidth,
        scrollHeight,
        setPopupHide,
        modalVisible,
        leftOffset
    } = props;

    const {
        id,
        category,
        adTitle,
        photoUrl,
        apartmentNumber,
        price,
        size,
        favoriteNumber,
        viewNumber,
        inFavorite,
        // isSold,
        // areaSize,
        // percentValue,
        // roomCount,
    } = data;

    const popupRef = useRef(null);
    // const scrollIntoView = useScrollIntoView();

    // useEffect(() => {
    //     if (popupClientLeft) {
    //         scrollIntoView(popupRef.current)
    //     }
    // }, [popupClientLeft])

    const spacedPrice = spaceInPriceValue(price)

    return (
        <Popup
            // ref={popupBackGroundRef}
            clientX={popupClientLeft}
            scrollWidth={scrollWidth}
            scrollHeight={scrollHeight}
        >
            <PopupContainer
            // ref={popupRef}
            >
                <PopupBlock>
                    <PopupHeader>
                        <PopupHeaderNumber>
                            №{apartmentNumber}
                        </PopupHeaderNumber>

                    </PopupHeader>

                    <PopupImageBlock>
                        <Image source={photoUrl}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </PopupImageBlock>

                    <PopupDetails>

                        <PopupDetailsCol>
                            <PopupDetailsPrice>
                                {spacedPrice} $
                            </PopupDetailsPrice>
                            <PopupDetailsName>
                                {adTitle}
                            </PopupDetailsName>
                            <PopupDetailsArea>
                                {size}
                            </PopupDetailsArea>
                        </PopupDetailsCol>

                        <PopupDetailsCol>
                            <PopupDetailsButtons>
                                <PercentButton isBig={false} />
                                <ShareButton isBig={false} />
                                <AddToFavoriteButton inFavorite={inFavorite} isBig={false} />
                            </PopupDetailsButtons>
                        </PopupDetailsCol>

                    </PopupDetails>

                    <PopupFooter>
                        <PopupFooterBlock>
                            <PopupFooterInfo>
                                <HeartSmallIcon height={10} />
                                <PopupFooterInfoText>{favoriteNumber}</PopupFooterInfoText>
                            </PopupFooterInfo >
                            <PopupFooterInfo>
                                <ViewIcon width={14} height={13} />
                                <PopupFooterInfoText>{viewNumber}</PopupFooterInfoText>
                            </PopupFooterInfo >
                        </PopupFooterBlock>
                        <PopupFooterLink
                        // TODO здесь указать ссылку на карточку
                        // as='a'
                        // href={`#/realtor/${category}/${id}`}
                        >
                            <PopupFooterLinkText>
                                Подробнее &gt;
                            </PopupFooterLinkText>
                        </PopupFooterLink>
                    </PopupFooter>
                    <PopupHeaderClose
                        onPress={() => setPopupHide()}
                    >
                        <CrossBlueIcon />
                    </PopupHeaderClose>
                </PopupBlock>

            </PopupContainer>
        </Popup>
    )
})
export default ApartmentPopupBlock;