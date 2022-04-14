import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';
// User
import HomePageUser from '../src/pages/User/HomePageUser/HomePageUser.jsx';
import CardPageUser from '../src/pages/User/CardPageUser/CardPageUser.jsx';
// Categories 
import ApartmentsPageUser from '../src/pages/User/ApartmentsPageUser/ApartmentsPageUser.jsx'
import HousesPageUser from '../src/pages/User/HousesPageUser/HousesPageUser.jsx'
import PlotsPageUser from '../src/pages/User/PlotsPageUser/PlotsPageUser.jsx'
import CommercePageUser from '../src/pages/User/CommercePageUser/CommercePageUser.jsx'
import RentPageUser from '../src/pages/User/RentPageUser/RentPageUser.jsx'

const Stack = createNativeStackNavigator();

export default function HomeUser() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerShown: false,
                headerBackVisible: false,
                // Header
                headerBackVisible: false,
                headerShown: true,
                headerTitle: () => (<HeaderUser />)
            })}>
                <Stack.Screen name="Home" component={HomePageUser} />
                <Stack.Screen name="CardPage" component={CardPageUser} />
                <Stack.Screen name="ApartmentsPage" component={ApartmentsPageUser} />
                <Stack.Screen name="HousesPage" component={HousesPageUser} />
                <Stack.Screen name="PlotsPage" component={PlotsPageUser} />
                <Stack.Screen name="CommercePage" component={CommercePageUser} />
                <Stack.Screen name="RentPage" component={RentPageUser} />
        </Stack.Navigator>)
}