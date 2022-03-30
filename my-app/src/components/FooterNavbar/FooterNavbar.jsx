// import { Link } from 'react-router-dom';
import { StyleSheet, Image, Text, TouchableOpacity, View, Linking } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const NAVBAR = [
    {
        title: "Объявления",
        path: "Home",
        uri: require("../../../assets/icon/Navbar/home_active_icon.png"),
    },
    {
        title: "Избранные",
        path: "AddPage",
        uri: require("../../../assets/icon/Navbar/favorite_icon.png"),
    },
    {
        title: "Создать",
        path: "FavoritePage",
        uri: require("../../../assets/icon/Navbar/add_icon.png"),
    },
    {
        title: "Подборки",
        path: "CollectionsPage",
        uri: require("../../../assets/icon/Navbar/collections_icon.png"),
    },
    {
        title: "Чаты",
        path: "ChatPage",
        uri: require("../../../assets/icon/Navbar/chat_icon.png"),
    },
];

const FooterNavbar = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Light': require('../../../assets/fonts/Rubik-Light.otf'),
        'Regular': require('../../../assets/fonts/Rubik-Regular.otf'),
        'Medium': require('../../../assets/fonts/Rubik-Medium.otf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const RenderNavbarItem = ({ item, id }) => {
        return (
            <TouchableOpacity
                key={id}
                onPress={() => navigation.navigate(item.path)}
                style={styles.footerNavbar_item} >
                <Image
                    source={item.uri}
                    style={styles.footerNavbar_img}
                    alt={`Иконка ${item.title}`} />
                <Text
                    style={styles.footerNavbar_text}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.footerNavbar}>
            {NAVBAR.map((item, id) => {
                return <RenderNavbarItem item={item} key={id} />
            })}
        </View >
    )
}

export default FooterNavbar;

const styles = StyleSheet.create({
    footerNavbar: {
        height: 50,
        width: '100%',
        flex: 0.08,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    footerNavbar_item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerNavbar_img: {
        width: 20,
        height: 20,
        marginBottom: 2,
    },
    footerNavbar_text: {
        fontSize: 10,
        fontFamily: 'Light'
    }
});
