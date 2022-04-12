import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';

// Import Home
import HomeUser from './routes/HomeUser'

// Navbar
import NavbarItem from './src/components/NavigationBar/NavigationBar'
// Navbar
import AddPage from './src/pages/Navbar/AddPage/AddPage'
import FavoritePage from './src/pages/Navbar/FavoritePage/FavoritePage'
import CollectionsPage from './src/pages/Navbar/CollectionsPage/CollectionsPage'
import ChatPage from './src/pages/Navbar/ChatPage/ChatPage'

const Tab = createBottomTabNavigator();

// Fonts
import { useFonts } from "@use-expo/font";
import AppLoading from 'expo-app-loading';
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

    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                headerLeft: () => null,
                showLabel: false,
                // Navigation Bar
                tabBarStyle: { paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    return <NavbarItem routeName={route.name} focused={focused} />
                },
            })}  >
            {/* Realtor Page */}
            <Tab.Screen
                options={{ title: '' }}
                name="Объявления" component={HomeUser} />
            <Tab.Screen name="Избранное" component={FavoritePage} />
            <Tab.Screen name="Создать" component={AddPage} />
            <Tab.Screen name="Подборки" component={CollectionsPage} />
            <Tab.Screen name="Чаты" component={ChatPage} />
        </Tab.Navigator>
    </NavigationContainer>
}
