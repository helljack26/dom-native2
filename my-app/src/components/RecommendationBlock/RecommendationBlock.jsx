import React from 'react';
import { StyleSheet, View } from 'react-native';

import RecommendationItem from './RecommendationItem/RecommendationItem'
import { RecommendationMockApi } from '@/api/mock/RecommendationMockApi'

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
const RecommendationBlock = () => {
    return (<Main
        style={`
            ${styles.main} } `}>
        <View style={styles.main_recommendation}>
            {RecommendationMockApi.map(item => {
                return (
                    <RecommendationItem data={item} key={item.id} />
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
