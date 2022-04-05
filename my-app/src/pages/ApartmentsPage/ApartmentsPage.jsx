import FONTS from '../../res/fonts'
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from '../../components/Header/Header';
import AdsFunctionalBar from '../../components/AdsFunctionalBar/AdsFunctionalBar';
import CatalogBlock from '../../components/CatalogBlock/CatalogBlock';
import { ApartmentMockApi } from '../../api/mock/ApartmentMockApi.jsx'
export default function ApartmentsPage({ navigation }) {
    return (
        <View style={styles.body}>
            <Header />
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <AdsFunctionalBar />
                <CatalogBlock navigation={navigation} data={ApartmentMockApi} />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: FONTS.regular,
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: FONTS.regular,
    },
})

