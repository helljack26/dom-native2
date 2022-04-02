import COLORS from '../../res/colors'

import { StyleSheet, View } from 'react-native';

import Breadcrumbs from '../Breadcrumbs'
import AdsPageTitle from './AdsPageTitle'
import AdsFilterBar from './AdsFilterBar'
import AdsButtonBar from './AdsButtonBar'

import PageLocation from '../helpers/pageLocation'

const AdsFunctionalBar = () => {

    const { title, ads } = PageLocation();
    return (
        <>
            <View style={styles.adsFunctionalBar}>
                <Breadcrumbs title={title} ads={ads} />
                <AdsPageTitle title={title} />
                {/* TODO здесь нужно отправлять в фильтра данные */}
                <AdsFilterBar />
            </View>
            <AdsButtonBar />
        </>
    )
}

export default AdsFunctionalBar;

const styles = StyleSheet.create({
    adsFunctionalBar: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 18,
        backgroundColor: COLORS.backgroundGray,
    },
});
