import { StyleSheet, TouchableOpacity, Image, Text, ScrollView, SafeAreaView, View } from 'react-native';

import Breadcrumbs from '../Breadcrumbs'
// import AdsPageTitle from './AdsPageTitle'
// import AdsFilterBar from './AdsFilterBar'
// import AdsFilterBarMobile from './AdsFilterBarMobile'
// import AdsButtonBar from './AdsButtonBar'
// import ButtonGalleryMap from './ButtonGalleryMap'

import PageLocation from '../helpers/pageLocation'


const AdsFunctionalBar = () => {

    const { title, ads } = PageLocation();
    return (
        <View style={styles.adsFunctionalBar}>
            <Breadcrumbs title={title} ads={ads} />
            {/* <Breadcrumbs  /> */}
            {/* <AdsPageTitle title={title} /> */}
            {/*TODO еще нужно посылать город в тайтл и количество обьектов */}
            {/* <AdsFilterBar /> */}
            {/* TODO здесь нужно отправлять в фильтра данные */}
            {/* <AdsFilterBarMobile />
            <div className={style.button_bar}>
                <AdsButtonBar />
                <ButtonGalleryMap />
            </div> */}

        </View>
    )
}

export default AdsFunctionalBar;

const styles = StyleSheet.create({
    adsFunctionalBar: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
});
