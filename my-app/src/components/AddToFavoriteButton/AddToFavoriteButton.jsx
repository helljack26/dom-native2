import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const AddToFavoriteButton = ({ inFavorite }) => {
    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])

    return type === true ?
        <TouchableOpacity
            onPress={() =>
                setType(false)} >
            <Image
                source={require("../../../assets/icon/heart_icon.png")}
                style={styles.addToFavorite}
                alt='Иконка добавить из избранного' />
        </TouchableOpacity>
        :
        <TouchableOpacity
            onPress={() =>
                setType(true)} >
            <Image
                source={require("../../../assets/icon/heart_active_icon.png")}
                style={styles.addToFavorite}
                alt='Иконка удалить из избранного' />
        </TouchableOpacity>
}

export default AddToFavoriteButton;

const styles = StyleSheet.create({
    addToFavorite: {
        width: 20,
        height: 18
    }
});
