import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import UserTabsNavigator from './UserTabsNavigator';
// import HomeRealtor from '../users/HomeRealtor';

const Drawer = createDrawerNavigator();

const UserSideMenuNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => {
                return (
                    <DrawerContentScrollView>
                        <DrawerItem label="Объявления" onPress={() => props.navigation.navigate("Home")} />
                        <DrawerItem label="Новости" onPress={() => props.navigation.navigate("NewsUser")} />
                        <DrawerItem label="Выход" onPress={() => props.navigation.navigate("Start")} />
                    </DrawerContentScrollView>
                )
            }}
            screenOptions={() => ({
                itemStyle: { padding: 5 },
                headerBackVisible: false,
                headerShown: false,
            })}>
            <Drawer.Screen name="Stack" component={UserTabsNavigator} />
            {/* <Drawer.Screen name="Realtor" component={RealtorStackNavigator} /> */}
        </Drawer.Navigator>
    );
};

export default UserSideMenuNavigator;

