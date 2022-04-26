import React from "react";
import { useRef, useEffect } from 'react';
import { spaceInPriceValue } from 'components/helpers/spaceInPriceValue'

import scrollState from "stores/entranceScrollWidth";

import PercentButton from 'components/Buttons/PercentButton/PercentButton';
import ShareButton from 'components/Buttons/ShareButton/ShareButton';
import AddToFavoriteButton from 'components/Buttons/AddToFavoriteButton'

// Images
import IMAGES from 'res/images'
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

const ApartmentPopupBlock = ({ apartmentData, leftOffset }) => {
    const {
        id,
        category,
        name,
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
    } = apartmentData;

    const popupBackGroundRef = useRef(null);
    const popupRef = useRef(null);
    useEffect(() => {
        popupBackGroundRef.current.scrollIntoView({
            behavior: "smooth",
            alignToTop: false,
        });
        popupRef.current.scrollIntoView({
            inline: 'center',
            block: 'center',
            behavior: "smooth",
            alignToTop: false,
        });
    }, [leftOffset])

    const spacedPrice = spaceInPriceValue(price)

    const scrollWidth = scrollState.scrollWidth;

    return (
        <Popup
            ref={popupBackGroundRef}
            clientX={leftOffset}
            scrollWidth={scrollWidth}
        >
            <PopupContainer ref={popupRef} >
                <PopupBlock onClick={(e) => e.stopPropagation()}>
                    <PopupHeader>
                        <PopupHeaderNumber>
                            №{apartmentNumber}
                        </PopupHeaderNumber>
                    </PopupHeader>

                    <PopupImageBlock>
                        <img src={photoUrl} width='100%' height='100%' alt="Plan" />
                    </PopupImageBlock>

                    <PopupDetails>

                        <PopupDetailsCol>
                            <PopupDetailsPrice>
                                {spacedPrice} $
                            </PopupDetailsPrice>
                            <PopupDetailsName>
                                {name}
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

                    {/* Footer */}
                    <PopupFooter>
                        <PopupFooterBlock>
                            <PopupFooterInfo>
                                <img src={IMAGES.heart} width='13px' alt="Иконка сколько в фаворитах" />
                                <PopupFooterInfoText>{favoriteNumber}</PopupFooterInfoText>
                            </PopupFooterInfo >
                            <PopupFooterInfo>
                                <img src={IMAGES.view} width='13px' alt="Иконка сколько просмотров" />
                                <PopupFooterInfoText>{viewNumber}</PopupFooterInfoText>
                            </PopupFooterInfo >
                        </PopupFooterBlock>
                        <PopupFooterLink
                            as='a'
                            href={`#/realtor/${category}/${id}`}
                        >
                            <PopupFooterLinkText>
                                Подробнее &gt;
                            </PopupFooterLinkText>
                        </PopupFooterLink>
                    </PopupFooter>

                </PopupBlock>
                <PopupHeaderClose as='button' type='button'>
                    <img src={IMAGES.CrossBlueIcon}
                        style={{ padding: "17px 20px" }}
                        alt="Close popup" />
                </PopupHeaderClose>
            </PopupContainer>
        </Popup>
    )
}
export default ApartmentPopupBlock;