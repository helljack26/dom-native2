import IMAGES from '@/res/images'
const {
    HomeNavIcon,
    HomeActiveNavIcon,
    HeartDefault,
    HeartActive,
    AddNavIcon,
    AddActiveNavIcon,
    CollectionNavIcon,
    CollectionActiveNavIcon,
    ChatNavIcon,
    ChatActiveNavIcon,
} = IMAGES;

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function NavbarItem({ focused, routeName }) {
    let icon
    if (routeName === 'Объявления') {
        icon = !focused ? <HomeNavIcon width={16} height={16} /> : <HomeActiveNavIcon width={16} height={16} />
    } else if (routeName === 'Избранное') {
        icon = !focused ? <HeartDefault width={16} height={16} /> : <HeartActive width={16} height={16} />
    } else if (routeName === 'Создать') {
        icon = !focused ? <AddNavIcon width={16} height={16} /> : <AddActiveNavIcon width={16} height={16} />
    } else if (routeName === 'Подборки') {
        icon = !focused ? <CollectionNavIcon width={16} height={16} /> : <CollectionActiveNavIcon width={16} height={16} />
    } else if (routeName === 'Чаты') {
        icon = !focused ? <ChatNavIcon width={16} height={16} /> : <ChatActiveNavIcon width={16} height={16} />
    }
    return <View style={styles.navbarTab}>
        {icon}
        <Text numberOfLines={1}
            ellipsizeMode='clip'
            style={{ fontSize: 10, width: '15%', marginTop: 3, color: focused ? '#0072db' : '#222' }}>
            {routeName}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    navbarTab: {
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
