import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages stack
import UserStackNavigator from './UserStackNavigator';
// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';
// Navbar
import NavbarItem from '@/components/NavigationBar/NavigationBar'
// Navbar
import AddPage from '@/pages/UserTapbar/AddPage/AddPage'
import FavoritePage from '@/pages/UserTapbar/FavoritePage/FavoritePage'


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
    </Tab.Navigator>
  );
};

export default UserTabsNavigator;
