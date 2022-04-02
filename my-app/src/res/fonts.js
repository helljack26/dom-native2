import * as Font from 'expo-font';

const useFonts = async () => await Font.loadAsync({

    Light: require('../../assets/fonts/Rubik-Light.otf'),
    Regular: require('../../assets/fonts/Rubik-Regular.otf'),
    Medium: require('../../assets/fonts/Rubik-Medium.otf'),
});

export default useFonts;