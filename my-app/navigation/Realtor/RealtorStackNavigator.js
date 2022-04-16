import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Realtor
import HomePageRealtor from '../../src/pages/Realtor/HomePageRealtor/HomePageRealtor.jsx';
import CardPageRealtor from '../../src/pages/Realtor/CardPageRealtor/CardPageRealtor.jsx';
// Categories 
import ApartmentsPageRealtor from '../../src/pages/Realtor/ApartmentsPageRealtor/ApartmentsPageRealtor.jsx'
import HousesPageRealtor from '../../src/pages/Realtor/HousesPageRealtor/HousesPageRealtor.jsx'
import PlotsPageRealtor from '../../src/pages/Realtor/PlotsPageRealtor/PlotsPageRealtor.jsx'
import CommercePageRealtor from '../../src/pages/Realtor/CommercePageRealtor/CommercePageRealtor.jsx'
import RentPageRealtor from '../../src/pages/Realtor/RentPageRealtor/RentPageRealtor.jsx'
// Side navigation
import NewsRealtorPage from '../../src/pages/Realtor/RealtorDrawerPages/NewsRealtorPage/NewsRealtorPage';
import NewsCardRealtor from '../../src/pages/Realtor/RealtorDrawerPages/NewsCardRealtor/NewsCardRealtor';

const Stack = createNativeStackNavigator();

export default function RealtorStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}>
            <Stack.Screen name="HomePageRealtor" component={HomePageRealtor} />
            <Stack.Screen name="CardPageRealtor" component={CardPageRealtor} />
            <Stack.Screen name="ApartmentsPageRealtor" component={ApartmentsPageRealtor} />
            <Stack.Screen name="HousesPageRealtor" component={HousesPageRealtor} />
            <Stack.Screen name="PlotsPageRealtor" component={PlotsPageRealtor} />
            <Stack.Screen name="CommercePageRealtor" component={CommercePageRealtor} />
            <Stack.Screen name="RentPageRealtor" component={RentPageRealtor} />
            {/* Side navigation */}
            <Stack.Screen name="NewsRealtor" component={NewsRealtorPage} />
            <Stack.Screen name="NewsCardRealtor" component={NewsCardRealtor} />
        </Stack.Navigator>)
}