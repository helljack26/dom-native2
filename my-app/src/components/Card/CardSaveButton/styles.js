import styled from 'styled-components/native';
import FONTS from '../../../res/fonts'
import COLORS from '../../../res/colors'

const Container = styled.View`
width: 100%;
background-color: #f4f4f4;
height: 69px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 32px;
padding: 5px 15px;
`
const Container_title = styled.View`
font-family: $medium-font;
display: block;
`
const Container_block = styled.View`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
const Container_block_btn = styled.TouchableOpacity`
background-color: white;
border: 1px solid black;
padding:12px 13px;
justify-content: center;
display: flex;
flex-direction: row;
align-items: center;
font-size: 14px;
border-radius: 4px;
`
const Container_block_btn_text = styled.Text`
margin-right: 5px;
font-family: ${FONTS.light};
font-size: 13px;

color: ${COLORS.mainBlack};
`
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

export const styles = {
    Container: Container,
    Container_title: Container_title,
    Container_block: Container_block,
    Container_block_btn_text: Container_block_btn_text,
    Container_block_btn: Container_block_btn,
    Complain: Complain,
    Complain_link: Complain_link,
    Complain_link_text: Complain_link_text,
}