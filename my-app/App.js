import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage/HomePage.jsx';

{/* Categories */ }
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

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name="Home" component={HomePage} />
      {/* Categories */}
      <Stack.Screen name="ApartmentsPage" component={ApartmentsPage} />
      <Stack.Screen name="HousesPage" component={HousesPage} />
      <Stack.Screen name="PlotsPage" component={PlotsPage} />
      <Stack.Screen name="CommercePage" component={CommercePage} />
      <Stack.Screen name="RentPage" component={RentPage} />
      {/* Navbar */}
      <Stack.Screen name="AddPage" component={AddPage} />
      <Stack.Screen name="FavoritePage" component={FavoritePage} />
      <Stack.Screen name="CollectionsPage" component={CollectionsPage} />
      <Stack.Screen name="ChatPage" component={ChatPage} />

    </Stack.Navigator>
  </NavigationContainer>
}
