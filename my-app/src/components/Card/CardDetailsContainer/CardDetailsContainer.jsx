import IMAGES from '../../../res/images'
import { useState } from 'react'
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import CardDetailsButtonBar from '../CardDetailsButtonBar/CardDetailsButtonBar'
import CardAccordion from '../CardAccordion/CardAccordion'

import { styles } from './style'
const { Container,
    Name_block,
    Name_block_header,
    Name_block_header_text,
    Name_block_header_text_block,
    Name_block_header_type,
    Place,
    Price,
    Price_block,
    Price_block_price,
    Price_block_square_rating,
    Price_block_price_square,
    Price_block_price_rating,
} = styles;
// import { Link } from 'react-router-dom';


const CardDetailsContainer = ({ details }) => {

    const {
        id,
        name,
        price,
        location,
        favoriteNumber,
        viewNumber,
        // percentageText,
        description,
        objectDetails,
        // agentId,
        // coords,
        inFavorite,
        isNewHouse } = details;
    // Object details
    const { apartmentType,
        totalArea,
        distanceToSea,
        decorate,
        residentialComplexPath,
        residentialComplex,
        placeOnChessBoard,
        placeOnChessBoardPath,
        apartmentClass,
        deadlines } = objectDetails;

    const spaceInPriceValue = (priceValue) => {
        return priceValue.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }
    const spacedPrice = spaceInPriceValue(price)
    const priceForSquareMeter = spaceInPriceValue(Math.trunc(price / totalArea))

    return (
        <Container>
            {/* Main name */}
            <Name_block>
                <Name_block_header>
                    <Name_block_header_text>
                        {name}

                        <Name_block_header_text_block>
                            {isNewHouse ?
                                <Name_block_header_type>Первичное жилье</Name_block_header_type>
                                :
                                <Name_block_header_type>Вторичное жилье</Name_block_header_type>}
                        </Name_block_header_text_block>
                    </Name_block_header_text>
                </Name_block_header>
            </Name_block>

            {/* Location */}
            <Place>{location}</Place>

            {/* Price */}
            <Price>
                <Price_block>
                    <Price_block_price>{spacedPrice} $</Price_block_price>
                    <Price_block_square_rating>
                        <Price_block_price_square>{priceForSquareMeter} $ за м² &nbsp;·&nbsp; </Price_block_price_square>
                        <Price_block_price_rating>Ниже рыночной</Price_block_price_rating>
                    </Price_block_square_rating>

                </Price_block>
                <CardDetailsButtonBar inFavorite={inFavorite} favoriteNumber={favoriteNumber} viewNumber={viewNumber} id={id} />
            </Price>

            {/* About object */}
            <CardAccordion objectDetails={objectDetails}/>
        </Container>
    )
}

export default CardDetailsContainer;