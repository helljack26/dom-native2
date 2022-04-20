import styled from 'styled-components/native';
import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'

const Similar = styled.ScrollView`

width: 100%;
`
const Similar_header = styled.Text`
font-size:20px;
font-family: ${FONTS.medium};
color: ${COLORS.mainBlack};
padding-top: 16px;
padding-bottom: 16px;
`
const Similar_block = styled.View`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`
export const styles = {
    Similar: Similar,
    Similar_header: Similar_header,
    Similar_block: Similar_block,

}