import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage/HomePage.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

// Categories 
import ApartmentsPage from './src/pages/ApartmentsPage/ApartmentsPage.jsx'
import HousesPage from './src/pages/HousesPage/HousesPage.jsx'
import PlotsPage from './src/pages/PlotsPage/PlotsPage.jsx'
import CommercePage from './src/pages/CommercePage/CommercePage.jsx'
import RentPage from './src/pages/RentPage/RentPage.jsx'
// Navbar
import AddPage from './src/pages/AddPage/AddPage.jsx'
import FavoritePage from './src/pages/FavoritePage/FavoritePage.jsx'
import CollectionsPage from './src/pages/CollectionsPage/CollectionsPage.jsx'
import ChatPage from './src/pages/ChatPage/ChatPage.jsx'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
    return <Stack.Navigator
        screenOptions={() => ({
            tabBarShowLabel: false,
            headerShown: false,
        })}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ApartmentsPage" component={ApartmentsPage} />
        <Stack.Screen name="HousesPage" component={HousesPage} />
        <Stack.Screen name="PlotsPage" component={PlotsPage} />
        <Stack.Screen name="CommercePage" component={CommercePage} />
        <Stack.Screen name="RentPage" component={RentPage} />
    </Stack.Navigator>
}


export default function App() {
    const RenderNavbarItem = ({ name, routeName, focused }) => {
        return (
            <>
                <Image
                    source={name}
                    style={focused ? styles.active : styles.footerNavbar_img}
                    alt={`Иконка}`} />
                <Text numberOfLines={1}
                    style={{ fontSize: 10, color: focused ? '#0072db' : '#222' }}>
                    {routeName}
                </Text>
            </>
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
                style: {
                    borderTopColor: '#66666666',
                    backgroundColor: 'white',
                    elevation: 10,
                },
                headerShown: false,
                showLabel: false,
            })}  >
            <Tab.Screen name="Объявления" component={Home} />
            <Tab.Screen name="Избранное" component={FavoritePage} />
            <Tab.Screen name="Создать" component={AddPage} />
            <Tab.Screen name="Подборки" component={CollectionsPage} />
            <Tab.Screen name="Чаты" component={ChatPage} />
        </Tab.Navigator>
    </NavigationContainer>
}


const styles = StyleSheet.create({

    footerNavbar_item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 9,
    },
    footerNavbar_img: {
        width: 20,
        resizeMode: 'contain',
        height: 20,
    },
    active: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
});
