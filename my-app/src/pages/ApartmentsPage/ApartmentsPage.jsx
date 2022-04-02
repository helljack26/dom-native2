import { StyleSheet, ScrollView, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Header from '../../components/Header/Header';
import AdsFunctionalBar from '../../components/AdsFunctionalBar/AdsFunctionalBar';
import Recommendation from '../../components/Recommendation/Recommendation';

export default function ApartmentsPage() {
    let [fontsLoaded] = useFonts({
        'Light': require('../../../assets/fonts/Rubik-Light.otf'),
        'Regular': require('../../../assets/fonts/Rubik-Regular.otf'),
        'Medium': require('../../../assets/fonts/Rubik-Medium.otf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <View style={styles.body}>
            <Header />
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <AdsFunctionalBar />
                <Recommendation />
                {/* // TODO change to catalog */}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: 'Regular',
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: 'Regular',
    },
})

