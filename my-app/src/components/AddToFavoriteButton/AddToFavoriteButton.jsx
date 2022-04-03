import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

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
            <Image
                source={require("../../../assets/icon/heart_active_icon.png")}
                style={{
                    width: iconWidth,
                    height: iconHeight
                }}
                alt='Иконка удалить из избранного' />
        </TouchableOpacity> :
        <TouchableOpacity
            onPress={() =>
                setType(true)} >
            <Image
                source={require("../../../assets/icon/heart_icon.png")}
                style={{
                    width: iconWidth,
                    height: iconHeight
                }}
                alt='Иконка добавить из избранного' />
        </TouchableOpacity>
}

export default AddToFavoriteButton;

