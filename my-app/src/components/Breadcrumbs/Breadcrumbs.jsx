import COLORS from '../../res/colors'
// import { FONTS } from '../../res/fonts'
import AppLoading from 'expo-app-loading';
import { StyleSheet, TouchableOpacity, Image, Text, ScrollView, SafeAreaView, View } from 'react-native';

const Breadcrumbs = ({ navigation }) => {
    // if (!FONTS) {
    //     return <AppLoading />;
    // }
    // console.log(FONTS);


    return (
        <View style={styles.breadcrumbs}>

            <TouchableOpacity
                onPress={() => {
                    return navigation.navigate("Home")
                }
                }
                style={styles.ads}>
                <Text>Объявления&nbsp; | &nbsp;</Text>
            </TouchableOpacity>
            <Text style={styles.page}>dsd</Text></View>
    )
}
export default Breadcrumbs;

const styles = StyleSheet.create({
    // TODO check font
    breadcrumbs: {
        fontFamily: "Light",
        fontSize: 13.5,
    },
    ads: {
        color: COLORS.secondBlack,
    },
    page: {
        color: COLORS.mainBlack,
    }
})