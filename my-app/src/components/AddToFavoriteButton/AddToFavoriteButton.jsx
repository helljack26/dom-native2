
import IMAGES from '@/res/images'
const { HeartDefault, HeartActive } = IMAGES;

import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

const AddToFavoriteButton = ({ inFavorite, isBig }) => {
    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])
    const iconSize = {
        recommendationBlock: {
            width: 20,
            height: 18
        },
        apartmentBlock: {
            width: 15,
            height: 13
        }
    }
    const iconWidth = isBig ? iconSize.recommendationBlock.width : iconSize.apartmentBlock.width
    const iconHeight = isBig ? iconSize.recommendationBlock.height : iconSize.apartmentBlock.height
    return type === true ?
        <TouchableOpacity
            onPress={() =>
                setType(false)} >
            <HeartActive width={iconWidth} height={iconHeight} />
        </TouchableOpacity> :
        <TouchableOpacity
            onPress={() =>
                setType(true)} >
            <HeartDefault width={iconWidth} height={iconHeight} />
        </TouchableOpacity>
}

export default AddToFavoriteButton;

