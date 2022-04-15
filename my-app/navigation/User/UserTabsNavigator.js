import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages stack
import UserStackNavigator from './UserStackNavigator';
// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';
// Navbar
import NavbarItem from '@/components/NavigationBar/NavigationBar'
// Navbar
import AddPage from '@/pages/Tapbar/AddPage/AddPage'
import FavoritePage from '@/pages/Tapbar/FavoritePage/FavoritePage'
// import CollectionsPage from '../src/pages/Tapbar/CollectionsPage/CollectionsPage'
// import ChatPage from '../src/pages/Tapbar/ChatPage/ChatPage'

const Tab = createBottomTabNavigator();

const UserTabsNavigator = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        showLabel: false,
        // Header
        headerShown: true,
        headerTitle: () => (<HeaderUser navigation={navigation} />),
        // Navigation Bar
        tabBarStyle: { paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return <NavbarItem routeName={route.name} focused={focused} />
        },
      })}  >

      <Tab.Screen
        options={{ title: '' }}
        name="Объявления" component={UserStackNavigator} />
      <Tab.Screen name="Создать" component={AddPage} />
      <Tab.Screen name="Избранное" component={FavoritePage} />
      {/* <Tab.Screen name="Подборки" component={CollectionsPage} />
      <Tab.Screen name="Чаты" component={ChatPage} /> */}
    </Tab.Navigator>
  );
};

export default UserTabsNavigator;
