import COLORS from '../../../res/colors'
import FONTS from '../../../res/fonts'
import IMAGES from '../../../res/images'
import { StyleSheet, TouchableOpacity, Image, View, Text, } from 'react-native';

import { useState } from 'react'
import styled from 'styled-components/native';
const ArrowDownIcon = IMAGES.arrow_down;
const Container = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0px 4%;
width: 92%;
background-color: white;
padding-top: 12px;
`;
const SortButton = styled.TouchableOpacity`
border-radius: 5px;
width: 79%;
border: 1px solid ${COLORS.mainBlack};
padding: 12px 30px;
font-size: 13px;
font-family: ${FONTS.light};
display: flex;
justify-content: center;
align-items: center;
`;
const FavoriteButton = styled.TouchableOpacity`
border-radius: 5px;
border: 1px solid ${COLORS.mainBlack};
padding: 12px 0px;
width: 17%;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
`;
const Title = styled.Text`
color: ${COLORS.mainBlack};
font-size: 13px;
`;
const SortValue = styled.Text`
color: ${COLORS.mainBlack};
font-size: 14px;
font-family: ${FONTS.medium};
margin-right: 20px;
`;
const HeartIcon = styled.Image`
width: 14px;
height: 14px;
`;

const AdsButtonBar = () => {


    const [type, setType] = useState(false);
    const sortValue = 'по умолчанию  '

    return (
        <Container>

            <SortButton>
                <Title>Сортировка:  <SortValue>
                    {sortValue}
                </SortValue>
                    <ArrowDownIcon />
                </Title>
            </SortButton>
            <FavoriteButton
                onPress={() => {
                    return setType(type ? false : true)
                }}>
                <HeartIcon source={type ? IMAGES.heart_active : IMAGES.heart_default} alt="Иконка сохранить поиск" />
            </FavoriteButton>
        </Container>
    )
}
export default AdsButtonBar;
