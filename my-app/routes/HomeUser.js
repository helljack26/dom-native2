import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';
import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';

// User
import HomePageUser from '../src/pages/HomePageUser/HomePageUser.jsx';
import CardPageUser from '../src/pages/CardPageUser/CardPageUser.jsx';
// Categories 
import ApartmentsPageUser from '../src/pages/ApartmentsPageUser/ApartmentsPageUser.jsx'
import HousesPageUser from '../src/pages/HousesPageUser/HousesPageUser.jsx'
import PlotsPageUser from '../src/pages/PlotsPageUser/PlotsPageUser.jsx'
import CommercePageUser from '../src/pages/CommercePageUser/CommercePageUser.jsx'
import RentPageUser from '../src/pages/RentPageUser/RentPageUser.jsx'

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

export default function HomeUser() {
    return <Stack.Navigator
        screenOptions={() => ({
            tabBarShowLabel: false,
            headerShown: false,
            headerBackVisible: false,
        })}>
        <Stack.Group
            screenOptions={() => ({
                // Header
                headerBackVisible: false,
                headerShown: true,
                headerTitle: () => (
                    <HeaderUser />
                )
            })}
        >
            <Stack.Screen name="Home" component={HomePageUser} />
            <Stack.Screen name="CardPage" component={CardPageUser} />
            <Stack.Screen name="ApartmentsPage" component={ApartmentsPageUser} />
            <Stack.Screen name="HousesPage" component={HousesPageUser} />
            <Stack.Screen name="PlotsPage" component={PlotsPageUser} />
            <Stack.Screen name="CommercePage" component={CommercePageUser} />
            <Stack.Screen name="RentPage" component={RentPageUser} />
        </Stack.Group>
        {/* Realtor */}
        <Stack.Group
            screenOptions={() => ({
                // Header
                headerBackVisible: false,
                headerShown: true,
                showLabel: false,
                headerTitle: () => (
                    <HeaderRealtor />

                ),
            })}>
            <Stack.Screen name="HomeRealtor" component={HomePageRealtor} />
            <Stack.Screen name="CardPageRealtor" component={CardPageRealtor} />
            <Stack.Screen name="ApartmentsPageRealtor" component={ApartmentsPageRealtor} />
            <Stack.Screen name="HousesPageRealtor" component={HousesPageRealtor} />
            <Stack.Screen name="PlotsPageRealtor" component={PlotsPageRealtor} />
            <Stack.Screen name="CommercePageRealtor" component={CommercePageRealtor} />
            <Stack.Screen name="RentPageRealtor" component={RentPageRealtor} />
        </Stack.Group>

    </Stack.Navigator>
}