
import styled from 'styled-components/native';
import COLORS from '@/res/colors'
import IMAGES from '@/res/images'
const { HeartDefault, HeartActive } = IMAGES;

import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
const Add = styled.TouchableOpacity`
background-color: white;
width: 42px;
height: 42px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
padding: 5px;
align-items: center;
justify-content: center;
margin-left: 10px;
`
const AddSmall = styled.TouchableOpacity`
background-color: white;
width: 32px;
height: 32px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
padding: 0px;
padding-top: -2px;
margin-left: -7px;
align-items: center;
justify-content: center;

`
const AddToFavoriteButton = ({ inFavorite, isBig }) => {
    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])
    const iconSize = {
        recommendationBlock: {
            width: 17,
            height: 17
        },
        apartmentBlock: {
            width: 14,
            height: 12
        }
    }
    const iconWidth = isBig ? iconSize.recommendationBlock.width : iconSize.apartmentBlock.width
    const iconHeight = isBig ? iconSize.recommendationBlock.height : iconSize.apartmentBlock.height
    return isBig === true ?
        <Add
            onPress={() =>
                setType(false)} >
            <HeartActive width={iconWidth} height={iconHeight} />
        </Add> :
        <AddSmall
            onPress={() =>
                setType(true)} >
            <HeartDefault width={iconWidth} height={iconHeight} />
        </AddSmall>
}

export default AddToFavoriteButton;

