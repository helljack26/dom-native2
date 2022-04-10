import IMAGES from '@/res/images'
const { BurgerMenuIcon, SearchIcon, BellIcon, UserHeaderIcon } = IMAGES;

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function NavbarItem({ focused, routeName }) {
    let iconName
    if (routeName === 'Объявления') {
        iconName = focused ? require("../../../assets/icon/Navbar/home_active_icon.png") : require("../../../assets/icon/Navbar/home_icon.png");
    } else if (routeName === 'Избранное') {
        iconName = focused ? require("../../../assets/icon/Navbar/favorite_active_icon.png") : require("../../../assets/icon/Navbar/favorite_icon.png");
    } else if (routeName === 'Создать') {
        iconName = focused ? require("../../../assets/icon/Navbar/add_active_icon.png") : require("../../../assets/icon/Navbar/add_icon.png");
    } else if (routeName === 'Подборки') {
        iconName = focused ? require("../../../assets/icon/Navbar/collections_active_icon.png") : require("../../../assets/icon/Navbar/collections_icon.png");
    } else if (routeName === 'Чаты') {
        iconName = focused ? require("../../../assets/icon/Navbar/chat_active_icon.png") : require("../../../assets/icon/Navbar/chat_icon.png");
    }
    return <View style={styles.navbarTab}>
        <Image
            source={iconName}
            style={focused ? styles.active : styles.footerNavbar_img}
            alt={`Иконка}`} />
        <Text numberOfLines={1}
            style={{ fontSize: 10, marginTop: 3, color: focused ? '#0072db' : '#222' }}>
            {routeName}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    navbarTab: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerNavbar_img: {
        width: 16,
        resizeMode: 'contain',
        height: 16,
    },
    active: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    }
});
