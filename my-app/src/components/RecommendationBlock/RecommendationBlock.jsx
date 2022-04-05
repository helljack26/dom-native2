import FONTS from '../../res/fonts'
import COLORS from '../../res/colors'

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import RecommendationItem from './RecommendationItem/RecommendationItem'


import styled from 'styled-components/native';
const Main = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0px 4%;
width: 92%;
background-color: white;
padding-top: 12px;
`;
const RecommendationBlock = ({ data, navigation }) => {
    return (<Main
        style={`
            ${styles.main} } `}>
        <View style={styles.main_recommendation}>
            {data.map(item => {
                return (
                    <RecommendationItem navigation={navigation} data={item} key={item.id} />
                )
            })}
        </View>
    </Main>
    )
}

export default RecommendationBlock;

const styles = StyleSheet.create({
    main_recommendation: {
        width: '100%',
    },
});
