import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator'

// Import Home
// import HomeUser from './routes/HomeUser'
// Navbar
import NavbarItem from '../src/components/NavigationBar/NavigationBar'
// Navbar
import AddPage from '../src/pages/Tapbar/AddPage/AddPage'
import FavoritePage from '../src/pages/Tapbar/FavoritePage/FavoritePage'
import CollectionsPage from '../src/pages/Tapbar/CollectionsPage/CollectionsPage'
import ChatPage from '../src/pages/Tapbar/ChatPage/ChatPage'

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        showLabel: false,
        // Navigation Bar
        tabBarStyle: { paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return <NavbarItem routeName={route.name} focused={focused} />
        },
      })}  >

      <Tab.Screen
        options={{ title: '' }}
        name="Объявления" component={DrawerNavigator} />
      <Tab.Screen name="Избранное" component={FavoritePage} />
      <Tab.Screen name="Создать" component={AddPage} />
      <Tab.Screen name="Подборки" component={CollectionsPage} />
      <Tab.Screen name="Чаты" component={ChatPage} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
