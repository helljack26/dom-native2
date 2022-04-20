import React from 'react';
import { StyleSheet, View } from 'react-native';

import CardDetailsButtonBar from '@/components/Card/CardDetailsButtonBar/CardDetailsButtonBar'
import ComplexAccordion from '../ComplexAccordion/ComplexAccordion'

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
} = style;

const ComplexDetailsUser = ({ details }) => {
    const {
        name,
        price,
        priceAfter,
        location,
        favoriteNumber,
        viewNumber,
        totalArea,
        inFavorite,
        isDone,
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
                        {isDone !== undefined ? isDone === true ?
                            <Name_block_header_text_block_new>
                                <Name_block_header_type>
                                    Сдан
                                </Name_block_header_type>
                            </Name_block_header_text_block_new>
                            :
                            <Name_block_header_text_block>
                                <Name_block_header_type>
                                    {isDone}
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
                    <Price_block_price>от {spacedPrice} $  {priceAfter !== undefined && priceAfter}</Price_block_price>
                    <Price_block_square_rating>
                        <Price_block_price_square>от {priceForSquareMeter} $ за м²</Price_block_price_square>
                    </Price_block_square_rating>
                </Price_block>
                <CardDetailsButtonBar inFavorite={inFavorite} favoriteNumber={favoriteNumber} viewNumber={viewNumber} />
            </Price>

            {/* About object */}
            <ComplexAccordion details={details} />
        </Container>
    )
}

export default ComplexDetailsUser;

const styles = StyleSheet.create({
    catalog_item_separate: {
        width: 7,
    }
});
