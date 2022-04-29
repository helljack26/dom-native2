import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// User
import HomePageUser from '../../src/pages/User/HomePageUser/HomePageUser.jsx';
import CardPageUser from '../../src/pages/User/CardPageUser/CardPageUser.jsx';
// Categories 
import ApartmentsPageUser from '../../src/pages/User/ApartmentsPageUser/ApartmentsPageUser.jsx'
import ApartmentsComplexPageUser from '../../src/pages/User/ApartmentsComplexPageUser/ApartmentsComplexPageUser.jsx'
import HousesPageUser from '../../src/pages/User/HousesPageUser/HousesPageUser.jsx'
import PlotsPageUser from '../../src/pages/User/PlotsPageUser/PlotsPageUser.jsx'
import CommercePageUser from '../../src/pages/User/CommercePageUser/CommercePageUser.jsx'
import RentPageUser from '../../src/pages/User/RentPageUser/RentPageUser.jsx'
// Side navigation
import NewsUserPage from '../../src/pages/UserSideMenuPages/NewsUserPage/NewsUserPage';
import NewsCardUser from '../../src/pages/UserSideMenuPages/NewsCardUser/NewsCardUser';
import NoveltiesPageUser from '../../src/pages/UserSideMenuPages/NoveltiesPageUser/NoveltiesPageUser';
import ContactsPageUser from '../../src/pages/UserSideMenuPages/ContactsPageUser/ContactsPageUser';

const Stack = createNativeStackNavigator();

export default function UserStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name="Home" component={HomePageUser} />
            <Stack.Screen name="CardPage" component={CardPageUser} />
            <Stack.Screen name="ApartmentsPage" component={ApartmentsPageUser} />
            <Stack.Screen name="ApartmentsComplexPage" component={ApartmentsComplexPageUser} />
            <Stack.Screen name="HousesPage" component={HousesPageUser} />
            <Stack.Screen name="PlotsPage" component={PlotsPageUser} />
            <Stack.Screen name="CommercePage" component={CommercePageUser} />
            <Stack.Screen name="RentPage" component={RentPageUser} />
            {/* Side navigation */}
            <Stack.Screen name="NewsUser" component={NewsUserPage} />
            <Stack.Screen name="NewsCardUser" component={NewsCardUser} />
            <Stack.Screen name="NoveltiesPage" component={NoveltiesPageUser} />
            <Stack.Screen name="ContactsPage" component={ContactsPageUser} />

        </Stack.Navigator>)
}