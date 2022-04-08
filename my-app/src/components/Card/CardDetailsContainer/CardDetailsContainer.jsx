import React from 'react';
import { StyleSheet, View } from 'react-native';

import CardDetailsButtonBar from '../CardDetailsButtonBar/CardDetailsButtonBar'
import CardAccordion from '../CardAccordion/CardAccordion'

import { style } from './style'
const { Container,
    Name_block,
    Name_block_header,
    Name_block_header_text,
    Name_block_header_text_block,
    Name_block_header_type,
    Name_block_header_text_block_new,
    Place,
    Price,
    Price_block,
    Price_block_price,
    Price_block_square_rating,
    Price_block_price_square,
    Price_block_price_rating,
} = style;

const CardDetailsContainer = ({ details }) => {
    const {
        name,
        price,
        location,
        favoriteNumber,
        viewNumber,
        totalArea,
        inFavorite,
        isNewHouse,
        objectDetails,
        description,
        // coords,
        // agentId,
        // percentageText,
    } = details;

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
                        <View style={styles.catalog_item_separate}></View>
                        {isNewHouse !== undefined ? isNewHouse === true ?
                            <Name_block_header_text_block_new>
                                <Name_block_header_type>
                                    Новостройка
                                </Name_block_header_type>
                            </Name_block_header_text_block_new>
                            :
                            <Name_block_header_text_block>
                                <Name_block_header_type>
                                    Вторичное жилье
                                </Name_block_header_type>
                            </Name_block_header_text_block> : null}
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
                <CardDetailsButtonBar inFavorite={inFavorite} favoriteNumber={favoriteNumber} viewNumber={viewNumber} />
            </Price>

            {/* About object */}
            <CardAccordion objectDetails={objectDetails} description={description} />
        </Container>
    )
}

export default CardDetailsContainer;
const styles = StyleSheet.create({
    catalog_item_separate: {
        width: 7,
    },

});
