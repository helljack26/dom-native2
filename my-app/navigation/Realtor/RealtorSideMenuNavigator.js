import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, useDrawerProgress, } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import RealtorTabsNavigator from './RealtorTabsNavigator';

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    const progress = useDrawerProgress();

    const translateX = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    return (
        <DrawerContentScrollView {...props}>
            <Animated.View style={{ transform: [{ translateX }] }}>
                <DrawerItem label="Объявления" onPress={() => props.navigation.navigate("HomePageRealtor")} />
                <DrawerItem label="Новости" onPress={() => props.navigation.navigate("NewsRealtor")} />
                <DrawerItem label="Новинки" onPress={() => props.navigation.navigate("NoveltiesPageRealtor")} />
                <DrawerItem label="Контакты" onPress={() => props.navigation.navigate("ContactsPageRealtor")} />
                <DrawerItem label="Шахматка" onPress={() => props.navigation.navigate("ApartmentsComplexPlanPageRealtor", {
                        complexId: 2658,
                        planId: 1215
                    })} />
                <DrawerItem label="Выход" onPress={() => props.navigation.navigate("Start")} />
            </Animated.View>
        </DrawerContentScrollView>
    );
}
const RealtorSideMenuNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={() => ({
                itemStyle: { padding: 5 },
                headerBackVisible: false,
                headerShown: false,
            })}>
            <Drawer.Screen name="Stack" component={RealtorTabsNavigator} />
        </Drawer.Navigator>
    );
};

export default RealtorSideMenuNavigator;

