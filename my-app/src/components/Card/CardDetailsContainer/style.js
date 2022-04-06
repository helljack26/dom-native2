import styled from 'styled-components/native';
import FONTS from '../../../res/fonts'
import COLORS from '../../../res/colors'


const Container = styled.View`
margin-top: 5px;
width: 100%;
`;
const Name_block = styled.View`
width: 100%;
display: flex;

`;
const Name_block_header = styled.View`

`
const Name_block_header_text_block = styled.View`
display: flex;
justify-content: center;
align-items: center;
width: 105px;
padding: 4px 0px;
margin-top: 10px;
border-radius: 20px;
background-color: #9b51e0;

`;
const Name_block_header_text = styled.Text`
font-size: 20px;
letter-spacing: 0.4px;
margin-right: 10px;
font-family:${FONTS.medium};
line-height: 30px;
`;
const Name_block_header_type = styled.Text`
color: white;
font-size: 9.5px;
font-family: ${FONTS.medium};
`;
const Place = styled.Text`
display: flex;
margin-top: 5px;
font-size: 12px;
font-family: ${FONTS.light};
`;
const Price = styled.View`
display: flex;
`;
const Price_block = styled.View`
margin-top: 14px;
display: flex;
`;
const Price_block_price = styled.Text`
font-size: 24px;
margin-right: 16px;
font-family:${FONTS.medium};
`;
const Price_block_square_rating = styled.View`
display: flex;
flex-direction: row;
`;
const Price_block_price_square = styled.Text`
font-family: ${FONTS.light};
font-size: 12px;
`;
const Price_block_price_rating = styled.Text`
font-family: ${FONTS.light};
font-size: 11px;
color: #6abd24;
`;
const About = styled.View`
width: 100%;
margin-top: 24px;
padding-top: 25px;
border-top: 1px solid ${COLORS.borderGray};
padding-bottom: 16px;
`;
const Block_header = styled.View`
font-size: 23px;
margin-bottom: 24px;
font-size: 21px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const About_block = styled.View`
display: flex;
font-display: row;
`;
const About_block_ul = styled.View`
font-family: ${FONTS.light};
font-size: 14px;
`;
const About_block_ul_li = styled.View`
font-family: ${FONTS.light};
font-size: 14px;
`;
const About_block_ul_title = styled.View`
margin-bottom: 10px;
display: flex;
color: ${COLORS.secondBlack};
align-items: center;
`;
const About_block_ul_link = styled.View`
text-decoration: underline;
color: ${COLORS.mainBlue};
`;
const Description = styled.View`
padding-top: 22px;
padding-bottom: 20px;
margin-bottom: 40px;
border-bottom: 1px solid ${COLORS.borderGray};
border-top: 1px solid ${COLORS.borderGray};
`;
const Description_text = styled.View`
line-height: 20px;
font-family: ${FONTS.light};
color: ${COLORS.mainBlack};
font-size: 14px;
`;

export const styles = {
    Container: Container,
    Name_block: Name_block,
    Name_block_header: Name_block_header,
    Name_block_header_text_block: Name_block_header_text_block,
    Name_block_header_text: Name_block_header_text,
    Name_block_header_type: Name_block_header_type,
    Place: Place,
    Price: Price,
    Price_block: Price_block,
    Price_block_price: Price_block_price,
    Price_block_square_rating: Price_block_square_rating,
    Price_block_price_square: Price_block_price_square,
    Price_block_price_rating: Price_block_price_rating,
    About: About,
    Block_header: Block_header,
    About_block: About_block,
    About_block_ul: About_block_ul,
    About_block_ul_li: About_block_ul_li,
    About_block_ul_title: About_block_ul_title,
    About_block_ul_link: About_block_ul_link,
    Description: Description,
    Description_text: Description_text,

}