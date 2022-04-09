import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// User
import HomePageUser from '../src/pages/HomePageUser/HomePageUser.jsx';
import CardPageUser from '../src/pages/CardPageUser/CardPageUser.jsx';
// Categories 
import ApartmentsPageUser from '../src/pages/ApartmentsPageUser/ApartmentsPageUser.jsx'
import HousesPageUser from '../src/pages/HousesPageUser/HousesPageUser.jsx'
import PlotsPageUser from '../src/pages/PlotsPageUser/PlotsPageUser.jsx'
import CommercePageUser from '../src/pages/CommercePageUser/CommercePageUser.jsx'
import RentPageUser from '../src/pages/RentPageUser/RentPageUser.jsx'

const Stack = createNativeStackNavigator();

export default function HomeUser() {
    return <Stack.Navigator
        screenOptions={() => ({
            tabBarShowLabel: false,
            headerShown: false,
        })}>
        <Stack.Screen name="Home" component={HomePageUser} />
        <Stack.Screen name="CardPage" component={CardPageUser} />
        <Stack.Screen name="ApartmentsPage" component={ApartmentsPageUser} />
        <Stack.Screen name="HousesPage" component={HousesPageUser} />
        <Stack.Screen name="PlotsPage" component={PlotsPageUser} />
        <Stack.Screen name="CommercePage" component={CommercePageUser} />
        <Stack.Screen name="RentPage" component={RentPageUser} />
    </Stack.Navigator>
}