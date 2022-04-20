import styled from 'styled-components/native';
import FONTS from '@/res/fonts'
const Main = styled.ScrollView`
width: 100%;
background-color: white;
padding: 0px 4%;
`;
const Complain = styled.View`
width: 100%;
margin-top: 12px;
margin-bottom: 40px;
align-items: flex-end;
`
const Complain_link = styled.TouchableOpacity`
font-size: 13px;
font-family: ${FONTS.light};
display: flex;
flex-direction: row;
align-items: center;
color: #d30000;
`
const Complain_link_text = styled.Text`
font-size: 13px;
font-family: ${FONTS.light};
color: #d30000;
margin-left: 5px;
`

export const style = {
    Main: Main,
    Complain: Complain,
    Complain_link: Complain_link,
    Complain_link_text: Complain_link_text,
}