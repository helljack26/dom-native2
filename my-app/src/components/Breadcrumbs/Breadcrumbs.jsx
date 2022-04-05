import COLORS from '../../res/colors'
import FONTS from '../../res/fonts'

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Breadcrumbs = ({ title, ads }) => {
    const navigation = useNavigation();

    const isAds = ads && <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Text
            style={styles.ads}
        >Объявления&nbsp; | &nbsp;</Text>
    </TouchableOpacity>
    return (
        <View style={styles.breadcrumbs}>
            {isAds}
            <Text style={styles.page}>{title}</Text>
        </View>
    )
}
export default Breadcrumbs;

{/* <div className={style.breadcrumbs_for_card_mobile}>
<button type='button' className={style.page} onClick={() => navigate(-1)}>
    <img src={IMAGES.arrow_left} alt="Arrow Left Icon" />Вернуться назад</button>
</div> */}



const styles = StyleSheet.create({

    breadcrumbs: {

        flex: 1,
        flexDirection: 'row'
    },
    ads: {
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: COLORS.secondBlack,
    },
    page: {
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: COLORS.mainBlack,
    }
})