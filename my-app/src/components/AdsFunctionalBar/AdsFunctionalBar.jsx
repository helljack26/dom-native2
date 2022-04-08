import COLORS from '../../res/colors'
import React from 'react';

import { StyleSheet, View } from 'react-native';

import Breadcrumbs from '../Breadcrumbs'
import AdsPageTitle from './AdsPageTitle'
import AdsFilterBar from './AdsFilterBar'
import AdsButtonBar from './AdsButtonBar'

const AdsFunctionalBar = () => {
    return (
        <>
            <View style={styles.adsFunctionalBar}>
                <Breadcrumbs />
                <AdsPageTitle />
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
