import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserStackNavigator from './UserStackNavigator';
import RealtorStackNavigator from './RealtorStackNavigator';
import NewsUserStack from './User/NewsUserStack';
// import HomeRealtor from '../users/HomeRealtor';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={() => ({
                itemStyle: { padding: 5 },
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}       >
            <Drawer.Screen name="User" component={UserStackNavigator} />
            <Drawer.Screen name="Realtor" component={RealtorStackNavigator} />
            <Drawer.Screen name="Новости" component={NewsUserStack} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
