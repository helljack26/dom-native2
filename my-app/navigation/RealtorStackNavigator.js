import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import header
import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';
// Realtor
import HomePageRealtor from '../src/pages/Realtor/HomePageRealtor/HomePageRealtor.jsx';
import CardPageRealtor from '../src/pages/Realtor/CardPageRealtor/CardPageRealtor.jsx';
// Categories 
import ApartmentsPageRealtor from '../src/pages/Realtor/ApartmentsPageRealtor/ApartmentsPageRealtor.jsx'
import HousesPageRealtor from '../src/pages/Realtor/HousesPageRealtor/HousesPageRealtor.jsx'
import PlotsPageRealtor from '../src/pages/Realtor/PlotsPageRealtor/PlotsPageRealtor.jsx'
import CommercePageRealtor from '../src/pages/Realtor/CommercePageRealtor/CommercePageRealtor.jsx'
import RentPageRealtor from '../src/pages/Realtor/RentPageRealtor/RentPageRealtor.jsx'

const Stack = createNativeStackNavigator();

export default function RealtorStackNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                itemStyle: { padding: 0 },
                tabBarShowLabel: false,
                headerBackVisible: false,
                // Header
                headerBackVisible: false,
                headerShown: true,
                headerTitle: () => (<HeaderRealtor navigation={navigation} />)
            })}>
            {/* Realtor */}
            <Stack.Screen name="HomeRealtor" component={HomePageRealtor} />
            <Stack.Screen name="CardPageRealtor" component={CardPageRealtor} />
            <Stack.Screen name="ApartmentsPageRealtor" component={ApartmentsPageRealtor} />
            <Stack.Screen name="HousesPageRealtor" component={HousesPageRealtor} />
            <Stack.Screen name="PlotsPageRealtor" component={PlotsPageRealtor} />
            <Stack.Screen name="CommercePageRealtor" component={CommercePageRealtor} />
            <Stack.Screen name="RentPageRealtor" component={RentPageRealtor} />
        </Stack.Navigator>)
}