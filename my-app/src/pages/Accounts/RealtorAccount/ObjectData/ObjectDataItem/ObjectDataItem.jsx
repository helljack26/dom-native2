import React from "react";

import FavoriteAndViewNumBlock from "components/FavoriteAndViewNumBlock";
import PercentButton from 'components/Buttons/PercentButton';
import CardSaveButton from "components/Card/CardSaveButton";

import { spaceInPriceValue } from 'components/helpers/spaceInPriceValue'

// Images
import IMAGES from 'res/images'

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
    FooterButtonImage,
    FooterButtonText,
    HideOnMobile,
} = style;

const ObjectDataItem = ({ data, pageHash }) => {
    const {
        id,
        complexId,
        name,
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
        // totalArea,
        // percentageText,
    } = data;

    // const messageNumber = 0;

    const spacedPrice = spaceInPriceValue(price)
    const spacedOldPrice = spaceInPriceValue(oldPrice)

    const isComplexLink = plans !== undefined ? `#/realtor/complex/${complexId}` : `#/realtor/${category}/${id}`
    const isActiveObject = pageHash === '#active'
    // This button after 576px hiding on this component and teleportate to CardSaveButton
    const TeleportButtonActive = isActiveObject && <FooterButton isTeleportButton={true} as='button' type='button'>
        <FooterButtonImage height='13px' width='13px' as='img' src={IMAGES.ArchiveIcon} />
        <FooterButtonText>Архивировать</FooterButtonText>
    </FooterButton>

    const TeleportButtonArchive = !isActiveObject && <FooterButton isTeleportButton={true} isActive={true} as='button' type='button'>
        <FooterButtonText isActive={true}>Активировать</FooterButtonText>
    </FooterButton>


    return (
        <ItemContainer>
            <ItemContainerBlock>

                <ItemColImageBlock href={isComplexLink} >
                    <img src={imagePath[0]} width='100%' height='100%' alt={name} />
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

                        <CatalogItemInfoName href={isComplexLink} >
                            {name}
                        </CatalogItemInfoName>

                        {complexName !== undefined && <CatalogItemInfoPlace>{complexName}</CatalogItemInfoPlace>}

                        {location !== undefined && <CatalogItemInfoPlace>{location}</CatalogItemInfoPlace>}

                        {size !== undefined && <CatalogItemInfoSize>{size}</CatalogItemInfoSize>}

                    </ItemColInfoBlock>

                    <ItemColRightBlock>

                        <FavoriteAndViewNumBlock
                            favoriteNumber={favoriteNumber}
                            viewNumber={viewNumber}
                        />

                        <ItemColRightBlockButtons>

                            <PercentButton isBig={true} />
                            {/* 
                            <MessageButton
                                as='button'
                                type='button'
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
                <CardSaveButton
                    isForAccount={true}
                    isActiveObject={isActiveObject}
                    TeleportButtonActive={TeleportButtonActive}
                    TeleportButtonArchive={TeleportButtonArchive}
                />

                <ItemContainerFooterButtons>
                    <HideOnMobile>
                        {TeleportButtonActive}
                        {TeleportButtonArchive}
                    </HideOnMobile>

                    <FooterButton as='button' type='button'>
                        <FooterButtonImage height='13px' as='img' src={IMAGES.RenameIcon} />
                        <FooterButtonText >Редактировать</FooterButtonText>

                    </FooterButton>

                    <FooterButton as='button' type='button'>
                        <FooterButtonImage height='10px' as='img' src={IMAGES.CrossIcon} />
                        <FooterButtonText >Удалить</FooterButtonText>

                    </FooterButton>

                </ItemContainerFooterButtons>

            </ItemContainerFooter>
        </ItemContainer>
    )
}
export default ObjectDataItem;