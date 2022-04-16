import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages stack
import RealtorStackNavigator from './RealtorStackNavigator';
// Import header
import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';
// Navbar
import NavbarItem from '@/components/NavigationBar/NavigationBar'
// Navbar
import AddPage from '@/pages/Tapbar/AddPage/AddPage'
import FavoritePage from '@/pages/Tapbar/FavoritePage/FavoritePage'
import CollectionsPage from '@/pages/Tapbar/CollectionsPage/CollectionsPage'
import ChatPage from '@/pages/Tapbar/ChatPage/ChatPage'

const Tab = createBottomTabNavigator();

const RealtorTabsNavigator = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        showLabel: false,
        // Header
        headerShown: true,
        headerTitle: () => (<HeaderRealtor navigation={navigation} />),
        // Navigation Bar
        tabBarStyle: { paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return <NavbarItem routeName={route.name} focused={focused} />
        },
      })}  >

      <Tab.Screen
        options={{ title: '' }}
        name="Объявления" component={RealtorStackNavigator} />
      <Tab.Screen name="Избранное" component={FavoritePage} />
      <Tab.Screen name="Создать" component={AddPage} />
      <Tab.Screen name="Подборки" component={CollectionsPage} />
      <Tab.Screen name="Чаты" component={ChatPage} />
    </Tab.Navigator>
  );
};

export default RealtorTabsNavigator;
