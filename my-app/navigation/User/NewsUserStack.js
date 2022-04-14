import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';
// User
import NewsUserPage from '../../src/pages/User/UserDrawerPages/NewsUserPage/NewsUserPage';
import NewsCardUser from '../../src/pages/User/UserDrawerPages/NewsCardUser/NewsCardUser';

const Stack = createNativeStackNavigator();

export default function NewsUserStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                itemStyle: { padding: 0 },
                tabBarShowLabel: false,
                headerBackVisible: false,
                // Header
                headerBackVisible: false,
                headerShown: true,
                headerTitle: () => (<HeaderUser navigation={navigation} />),
            })}>
            <Stack.Screen name="NewsUser" component={NewsUserPage} />
            <Stack.Screen name="NewsCardUser" component={NewsCardUser} />
        </Stack.Navigator>
        )
}