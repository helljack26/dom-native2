import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, Text, View } from 'react-native';

import { useFonts } from "@use-expo/font";
import AppLoading from 'expo-app-loading';

// Navbar
import AddPage from './src/pages/Navbar/AddPage/AddPage'
import FavoritePage from './src/pages/Navbar/FavoritePage/FavoritePage'
import CollectionsPage from './src/pages/Navbar/CollectionsPage/CollectionsPage'
import ChatPage from './src/pages/Navbar/ChatPage/ChatPage'

// Import home
import HomeUser from './routes/HomeUser'
// import HomeRealtor from './routes/HomeRealtor'

const Tab = createBottomTabNavigator();
const customFonts = {
    RubikLight: require('./assets/fonts/Rubik-Light.otf'),
    RubikRegular: require('./assets/fonts/Rubik-Regular.otf'),
    RubikMedium: require('./assets/fonts/Rubik-Medium.otf'),
};
export default function App() {
    const [isLoaded] = useFonts(customFonts);
    if (!isLoaded) {
        return <AppLoading />;
    }

    const RenderNavbarItem = ({ name, routeName, focused }) => {
        return (<View style={styles.navbarTab}>
            <Image
                source={name}
                style={focused ? styles.active : styles.footerNavbar_img}
                alt={`Иконка}`} />
            <Text numberOfLines={1}
                style={{ fontSize: 10, marginTop: 3, color: focused ? '#0072db' : '#222' }}>
                {routeName}
            </Text>
        </View>
        );
    };

    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === 'Объявления') {
                        iconName = focused ? require("./assets/icon/Navbar/home_active_icon.png") : require("./assets/icon/Navbar/home_icon.png");
                    } else if (route.name === 'Избранное') {
                        iconName = focused ? require("./assets/icon/Navbar/favorite_active_icon.png") : require("./assets/icon/Navbar/favorite_icon.png");
                    } else if (route.name === 'Создать') {
                        iconName = focused ? require("./assets/icon/Navbar/add_active_icon.png") : require("./assets/icon/Navbar/add_icon.png");
                    } else if (route.name === 'Подборки') {
                        iconName = focused ? require("./assets/icon/Navbar/collections_active_icon.png") : require("./assets/icon/Navbar/collections_icon.png");
                    } else if (route.name === 'Чаты') {
                        iconName = focused ? require("./assets/icon/Navbar/chat_active_icon.png") : require("./assets/icon/Navbar/chat_icon.png");
                    }
                    return <RenderNavbarItem name={iconName} routeName={route.name} focused={focused} />
                },
                tabBarStyle: { flex: 0.07, paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' },
                headerShown: false,
                showLabel: false,
            })}  >
            {/* User Version */}
            <Tab.Screen name="Объявления" component={HomeUser} />

            {/* Realtor Version */}
            {/* <Tab.Screen name="Объявления" component={HomeRealtor} /> */}
            <Tab.Screen name="Избранное" component={FavoritePage} />
            <Tab.Screen name="Создать" component={AddPage} />
            <Tab.Screen name="Подборки" component={CollectionsPage} />
            <Tab.Screen name="Чаты" component={ChatPage} />
        </Tab.Navigator>
    </NavigationContainer>
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
