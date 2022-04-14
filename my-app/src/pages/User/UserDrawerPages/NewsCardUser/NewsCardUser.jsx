import FONTS from '@/res/fonts'

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';

import styled from 'styled-components/native';

// import { apiMocks } from '@/api/mock/apiMocks'
const MainBlock = styled.ScrollView`
width: 100%;
background-color: white;
padding: 0px 4%
`;

export default function NewsCardUser() {
    const route = useRoute();
    const { itemId, category } = route.params;
    const scrollViewRef = useRef(null)

    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true })
        }
    }
    if (itemId) {
        scrollTop()
    }

    // const catalogDefined = whichCatalog(category)
    // const objectDetails = catalogDefined.find((item) => item.id === Number(itemId) && item);

    // const { id, photoLargePath } = objectDetails;
    return (<SafeAreaView style={styles.body}>

        <MainBlock
            ref={scrollViewRef}
            horizontal={false}>

        </MainBlock>
    </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: FONTS.regular,
    },
})