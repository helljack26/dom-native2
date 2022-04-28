import styled from 'styled-components/native';
import COLORS from '@/res/colors'
import FONTS from '@/res/fonts'

const Container = styled.ScrollView`
width: 100%;
padding: 0px 4%;
padding-top: 50px;
background-color: white ;
padding-bottom: 100px;
`;
const AdsHeader = styled.View`
width: 100%;
`;
const AdsHeaderText = styled.Text`
margin-bottom: 2px;
color: ${COLORS.mainBlack};
font-family: ${FONTS.medium};
font-size: 20px;
`;
const CollectionsEmptyText = styled.Text`
font-size: 24px;
margin-top: 25px;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
color: ${COLORS.mainBlack};
`;
const AdsQueryNumber = styled.Text`
color: ${COLORS.secondBlack};
font-family: ${FONTS.light};
font-size: 12px;
`;
const CollectionsContainer = styled.View`
display: flex;
flex-direction: column;
margin-top: 23px;
`;

export const style = {
    Container: Container,
    AdsHeader: AdsHeader,
    AdsHeaderText: AdsHeaderText,
    CollectionsEmptyText:CollectionsEmptyText,
    AdsQueryNumber: AdsQueryNumber,
    CollectionsContainer: CollectionsContainer,
}