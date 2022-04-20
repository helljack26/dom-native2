import styled from 'styled-components/native';
import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'

const About = styled.View`
width: 100%;
margin-top: 24px;
border-bottom-color: ${COLORS.borderGray};
border-bottom-width: 1px;
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

const PartsBlock = styled.View`
  display: flex;
flex-direction: column;
width: 100%;
  padding-bottom: 12px;
`
const BlockItemInfo = styled.View`
width:90%;
`
const BlockItem = styled.View`
border: 1px solid ${COLORS.borderGray};
padding: 14px;
margin-bottom: 12px;
padding-right: 10px;
position: relative;
border-radius: 4px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
min-height: 135px;
`
const BlockItemCol = styled.View`
display: flex;
justify-content: space-between;
flex-direction: column;
`
const BlockItemName = styled.Text`
font-family: ${FONTS.medium};
color: ${COLORS.mainBlack};
font-size: 17px;
`
const BlockItemDescription = styled.Text`
font-family: ${FONTS.light};
color: ${COLORS.secondBlack};
font-size: 13px;
margin-bottom: 10px;
`
const BlockItemLink = styled.TouchableOpacity`
`
const BlockItemLinkText = styled.Text`
color: ${COLORS.mainBlue};
font-size: 13px;
font-family: ${FONTS.medium};
`
const Label = styled.View`
display: flex;
align-items: center;
justify-content: center;
padding: 4px 8px;
border-radius: 20px;
position: absolute;
top: 0px;
right: 0px;
`
const DoneLabel = styled(Label)`
background-color: ${COLORS.green};
margin-left: 10px;
`
const ExpiryDateLabel = styled(Label)`
background-color: ${COLORS.orange};
margin-left: 10px;
`
const LabelText = styled.Text`
color: white;
font-size: 10px;
font-family: ${FONTS.regular};
padding: 0;
`

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
  PartsBlock: PartsBlock,
  BlockItem: BlockItem,
  BlockItemCol: BlockItemCol,
  BlockItemInfo: BlockItemInfo,
  BlockItemName: BlockItemName,
  BlockItemDescription: BlockItemDescription,
  BlockItemLink: BlockItemLink,
  BlockItemLinkText: BlockItemLinkText,
  DoneLabel: DoneLabel,
  LabelText: LabelText,
  ExpiryDateLabel: ExpiryDateLabel,
}