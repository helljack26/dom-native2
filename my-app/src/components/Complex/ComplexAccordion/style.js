import styled from 'styled-components/native';
import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'

const About = styled.View`
width: 100%;
margin-top: 24px;
`;
const Block_header = styled.TouchableOpacity`
font-size: 20px;
border-top-color: ${COLORS.borderGray};
border-top-width: 1px;
background-color: white;
padding-top: 16px;  
padding-bottom: 16px;
padding-right: 7px;
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Block_header_Text = styled.Text`
font-family: ${FONTS.medium};
font-size: 20px;
`;
const About_block = styled.View`
display: flex;
background-color: white;
`;
const About_block_ul = styled.View`
font-family: ${FONTS.light};
margin-bottom: 10px;
`;
const About_block_ul_li = styled.View`
flex-direction: row;
display: flex;
`;
const About_block_ul_title = styled.Text`
margin-bottom: 12px;
display: flex;
font-size: 14px;
color: ${COLORS.secondBlack};
align-items: center;
`;
const About_block_ul_value = styled.Text`
margin-bottom: 10px;
display: flex;
font-size: 14px;
color: ${COLORS.mainBlack};
align-items: center;
`;
const Benefits_value = styled.Text`
margin-bottom: 10px;
display: flex;
margin-left: 5px;
font-size: 14px;
color: ${COLORS.mainBlack};
align-items: center;
`;
const About_block_ul_link = styled.TouchableOpacity`

`;
const About_block_ul_link_text = styled.Text`
text-decoration: underline;
color: ${COLORS.mainBlue};
`;
const Description = styled.View`
display:flex;
background-color: white;
padding-bottom: 20px;
border-bottom-color: ${COLORS.borderGray};
border-bottom-width: 1px;
`;
const Description_text = styled.Text`
font-family: ${FONTS.light};
color: ${COLORS.mainBlack};
font-size: 14px;
line-height:21px;
`;

export const styles = {
  About: About,
  Block_header: Block_header,
  Block_header_Text: Block_header_Text,
  About_block: About_block,
  About_block_ul: About_block_ul,
  About_block_ul_li: About_block_ul_li,
  About_block_ul_title: About_block_ul_title,
  About_block_ul_value: About_block_ul_value,
  About_block_ul_link: About_block_ul_link,
  About_block_ul_link_text: About_block_ul_link_text,
  Benefits_value: Benefits_value,
  Description: Description,
  Description_text: Description_text,
}