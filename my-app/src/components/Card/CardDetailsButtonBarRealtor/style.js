import styled from 'styled-components/native';
import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'


const Card_details = styled.View`
display: flex;
width: 100%;
flex-direction: row;

align-items: center;
justify-content: space-between;
margin-top: 24px;
`;
const FavoriteView = styled.View`
display: flex;
flex-direction: row;

align-items: center;
`;
const FavoriteView_block = styled.View`
font-size: 14px;
font-family: ${FONTS.light};
display: flex;
align-items: center;
flex-direction: row;
margin-right: 16px;
margin-bottom: 13px;
`
const FavoriteView_block_text = styled.Text`
margin-left: 8px;
font-family: ${FONTS.light};
color: ${COLORS.mainBlack};
font-size: 14px;


`
const Details_mobile = styled.View`
display: flex;
flex-direction: row;

margin-top: -8px;
`;
const Details_mobile_btn = styled.TouchableOpacity`
width: 42px;
height: 42px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;

border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
`;



export const styles = {
    Card_details: Card_details,
    FavoriteView: FavoriteView,
    FavoriteView_block: FavoriteView_block,
    Details_mobile: Details_mobile,
    Details_mobile_btn: Details_mobile_btn,
    FavoriteView_block_text: FavoriteView_block_text,
}