import { useFonts } from 'expo-font';

const FONTS = () => {
    let [fontsLoaded] = useFonts({
        'Light': require('../../assets/fonts/Rubik-Light.otf'),
        'Regular': require('../../assets/fonts/Rubik-Regular.otf'),
        'Medium': require('../../assets/fonts/Rubik-Medium.otf'),
    });
    return fontsLoaded

}

export default FONTS;