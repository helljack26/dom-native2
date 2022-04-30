import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

// Styles
const Button = styled.TouchableOpacity`
bottom: 16px;
border-radius: 8px;
width: 100%;
font-size: 16px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
padding: 11px 0px;
background-color: rgba(34, 34, 34, 0.7);
margin-top: 23px;
`;
const MapButton = styled.TouchableOpacity`
bottom: 16px;
border-radius: 8px;
width: 48.8%;
font-size: 16px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
padding: 9px 0px;
background-color: rgba(34, 34, 34, 0.7);
margin-top: 23px;
`;
const BtnBlock = styled.View`
width: 100%;
font-size: 16px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: -16px;
`;
const AllPhotoText = styled.Text`
font-family: ${F.medium};
color: white;
font-size: 14px;
margin-left: 10px;
`;

export const styles = {
    Button: Button,
    MapButton: MapButton,
    BtnBlock: BtnBlock,
    AllPhotoText: AllPhotoText,
}