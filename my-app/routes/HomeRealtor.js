import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Realtor
import HomePageRealtor from '../src/pages/HomePageRealtor/HomePageRealtor.jsx';
import CardPageRealtor from '../src/pages/CardPageRealtor/CardPageRealtor.jsx';
// Categories 
import ApartmentsPageRealtor from '../src/pages/ApartmentsPageRealtor/ApartmentsPageRealtor.jsx'
import HousesPageRealtor from '../src/pages/HousesPageRealtor/HousesPageRealtor.jsx'
import PlotsPageRealtor from '../src/pages/PlotsPageRealtor/PlotsPageRealtor.jsx'
import CommercePageRealtor from '../src/pages/CommercePageRealtor/CommercePageRealtor.jsx'
import RentPageRealtor from '../src/pages/RentPageRealtor/RentPageRealtor.jsx'

const Stack = createNativeStackNavigator();

export default function HomeRealtor() {
    return <Stack.Navigator
        screenOptions={() => ({
            tabBarShowLabel: false,
            headerShown: false,
        })}>
        <Stack.Screen name="Home" component={HomePageRealtor} />
        <Stack.Screen name="CardPage" component={CardPageRealtor} />
        <Stack.Screen name="ApartmentsPage" component={ApartmentsPageRealtor} />
        <Stack.Screen name="HousesPage" component={HousesPageRealtor} />
        <Stack.Screen name="PlotsPage" component={PlotsPageRealtor} />
        <Stack.Screen name="CommercePage" component={CommercePageRealtor} />
        <Stack.Screen name="RentPage" component={RentPageRealtor} />
    </Stack.Navigator>
}