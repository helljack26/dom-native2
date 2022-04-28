import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages stack
import RealtorStackNavigator from './RealtorStackNavigator';
// Import header
import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';
// Navbar
import NavbarItem from '@/components/NavigationBar/NavigationBar'
// Navbar
import AddPageRealtor from '@/pages/RealtorTapbar/AddPageRealtor/AddPageRealtor'
import FavoritePageRealtor from '@/pages/RealtorTapbar/FavoritePageRealtor/FavoritePageRealtor'
import RealtorCollectionsStackNavigator from './RealtorCollectionsStackNavigator'
import ChatPageRealtor from '@/pages/RealtorTapbar/ChatPageRealtor/ChatPageRealtor'

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
      <Tab.Screen name="Избранное" component={FavoritePageRealtor} />
      <Tab.Screen name="Создать" component={AddPageRealtor} />
      <Tab.Screen name="Подборки" component={RealtorCollectionsStackNavigator} />
      <Tab.Screen name="Чаты" component={ChatPageRealtor} />
    </Tab.Navigator>
  );
};

export default RealtorTabsNavigator;
