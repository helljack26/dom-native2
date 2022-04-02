import COLORS from '../../../res/colors'
import FONTS from '../../../res/fonts'

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useGalleryButtonStore } from '../../../stores/galleryMapBtn';

const AdsFilterBar = observer(() => {
    const { btnState, changeView } = useGalleryButtonStore();
    const filterCounter = 3;

    return (
        <View style={styles.filter_mobile}>
            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.filterBtn_text} >
                    Фильтры
                </Text>
                <Text style={styles.filterBtn_number} >
                    {filterCounter}
                </Text>
            </TouchableOpacity>
            <View style={styles.border}></View>
            <TouchableOpacity
                onPress={changeView}
                style={styles.button}>
                <Text> {!btnState ? 'Галерея' : 'На карте'}</Text>
            </TouchableOpacity>
        </View>
    )
})

export default AdsFilterBar;

const styles = StyleSheet.create({
    filter_mobile: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        width: "96%",
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        marginHorizontal: "2%",
        marginTop: 23,
        backgroundColor: "white",
        borderRadius: 5
    },
    button: {
        width: "50%",
        height: 42,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14
    },
    border: {
        backgroundColor: 'black',
        width: 0.7,
        height: '100%'
    },
    filterBtn_number: {
        borderRadius: 24 / 2,
        width: 24,
        height: 24,
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: COLORS.mainBlue,
        marginLeft: 13,
        paddingRight: 1,
        paddingTop: 5,
        fontFamily: FONTS.medium,
        fontSize: 12
    }
});
