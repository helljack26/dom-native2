import styled from 'styled-components/native';
import COLORS from '@/res/colors'
import IMAGES from '@/res/images'
import ICONSIZE from '@/res/sizes'
const { HeartDefault, HeartActive } = IMAGES;

import React, { useState, useEffect } from 'react';

const AddLarge = styled.TouchableOpacity`
background-color: white;
width: ${ICONSIZE.buttonLarge}px;
height: ${ICONSIZE.buttonLarge}px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`
const AddSmall = styled.TouchableOpacity`
background-color: white;
width: ${ICONSIZE.buttonSmall}px;
height: ${ICONSIZE.buttonSmall}px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
padding: 0px;
padding-top: -2px;
margin-left: 10px;
align-items: center;
justify-content: center;
`
const AddToFavoriteButton = ({ inFavorite, isBig }) => {
    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])


    const largeStyle = type === true ?
        <AddLarge onPress={() => setType(false)} >
            <HeartActive width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </AddLarge>
        :
        <AddLarge onPress={() => setType(true)} >
            <HeartDefault width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </AddLarge>

    const smallStyle = type === true ?
        <AddSmall onPress={() => setType(false)} >
            <HeartActive width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </AddSmall>
        :
        <AddSmall onPress={() => setType(true)} >
            <HeartDefault width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </AddSmall>

    return isBig === true ? largeStyle : smallStyle;

}

export default AddToFavoriteButton;

