import COLORS from '../../res/colors'

import { StyleSheet, TouchableOpacity, Image, Text, ScrollView, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Breadcrumbs = ({ title, ads }) => {

    const navigation = useNavigation();

    const isAds = ads && <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.ads}>
        <Text>Объявления&nbsp; | &nbsp;</Text>
    </TouchableOpacity>
    return (
        <View style={styles.breadcrumbs}>

            {isAds}
            <Text style={styles.page}>{title}</Text>
        </View>
    )
}
export default Breadcrumbs;

const styles = StyleSheet.create({
    // TODO check font
    breadcrumbs: {
        fontFamily: "Medium",
        fontSize: 13.5,
        flex: 1,
        flexDirection: 'row'
    },
    ads: {

        color: COLORS.secondBlack,
    },
    page: {
        fontFamily: "RubikMedium",
        color: COLORS.mainBlack,
    }
})