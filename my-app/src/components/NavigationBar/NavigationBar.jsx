import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageLocation from '@/components/helpers/pageLocation'
import { useCatalogApiStore } from '@/stores/CatalogApi';

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

export default function NavbarItem({ focused, routeName }) {
    const { isRealtor } = PageLocation();
    const navigation = useNavigation();

    const { setCatalog } = useCatalogApiStore();

    let icon
    const iconSize = 16;

    if (routeName === 'Объявления') {
        icon = !focused ? <HomeNavIcon width={iconSize} height={iconSize} /> : <HomeActiveNavIcon width={iconSize} height={iconSize} />
    } else if (routeName === 'Избранное') {
        icon = !focused ? <HeartDefault width={iconSize} height={iconSize} /> : <HeartActive width={iconSize} height={iconSize} />
    } else if (routeName === 'Создать') {
        icon = !focused ? <AddNavIcon width={iconSize} height={iconSize} /> : <AddActiveNavIcon width={iconSize} height={iconSize} />
    } else if (routeName === 'Подборки') {
        icon = !focused ? <CollectionNavIcon width={iconSize} height={iconSize} /> : <CollectionActiveNavIcon width={iconSize} height={iconSize} />
    } else if (routeName === 'Чаты') {
        icon = !focused ? <ChatNavIcon width={iconSize} height={iconSize} /> : <ChatActiveNavIcon width={iconSize} height={iconSize} />
    }
    const resetCatalog = () => {
        return isRealtor !== true ?
            (setCatalog('Home'), navigation.navigate('Home')
            )
            :
            (setCatalog('HomePageRealtor'),
                navigation.navigate('HomePageRealtor')
            )
    }
    return (routeName !== 'Объявления' ?
        <View
            style={styles.navbarTab}
        >
            {icon}
            <Text numberOfLines={1}
                ellipsizeMode='clip'
                style={{ fontSize: 10, width: '15%', marginTop: 3, color: focused ? '#0072db' : '#222' }}>
                {routeName}
            </Text>
        </View> :
        <TouchableOpacity
            style={styles.navbarTab}
            onPress={() => resetCatalog()} >
            {icon}
            <Text numberOfLines={1}
                ellipsizeMode='clip'
                style={{ fontSize: 10, width: '15%', marginTop: 3, color: focused ? '#0072db' : '#222' }}>
                {routeName}
            </Text>
        </TouchableOpacity>

    )
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
