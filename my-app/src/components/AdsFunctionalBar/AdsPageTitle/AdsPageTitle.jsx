import COLORS from '../../../res/colors'
import FONTS from '../../../res/fonts'

import { StyleSheet, Text, View } from 'react-native';

const AdsPageTitle = ({ title, city = 'Сочи', queryNumber = 143 }) => {
    return (<View >
        <View style={styles.adsHeaderBlock}>
            <Text style={styles.adsHeader}>{title}</Text>
            <Text style={styles.adsHeader}> в </Text>
            <Text style={styles.adsHeader}>{city}</Text>
        </View>
        <View>{queryNumber &&
            <Text style={styles.adsQueryNumber}>{queryNumber}
                <Text style={styles.adsQueryNumber}> объектов</Text>
            </Text>}
        </View>
    </View>
    )
}
export default AdsPageTitle;

const styles = StyleSheet.create({
    adsHeaderBlock: {
        flex: 1,
        flexDirection: 'row',
    },
    adsHeader: {
        fontFamily: FONTS.medium,
        color: COLORS.mainBlack,
        fontSize: 20,
        marginTop: 32,
        marginBottom: 4,
    },
    adsQueryNumber: {
        fontSize: 12,
        color: COLORS.mainBlack,
    }
});
