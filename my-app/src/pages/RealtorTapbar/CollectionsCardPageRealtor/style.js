import styled from 'styled-components/native';
import FONTS from '@/res/fonts'
import COLORS from '@/res/colors'


const Container = styled.ScrollView`
padding: 0px 4%;
width: 100%;
`;
const FunctionalBar = styled.View`
width: 100%;
padding:0px 4%;
background-color: ${COLORS.backgroundGray};
`;
const CollectionsContainer = styled.View`
padding-bottom: 24px;
width: 100%;
margin-top: 30px;
`;
const FunctionalBarBlockTitle = styled.View`
width: 100%;
`;
const FunctionalBarText = styled.Text`
margin-top: 32px;
margin-bottom: 5px;
font-family: ${FONTS.medium};
color: ${COLORS.mainBlack};
font-size: 20px;
`;
const FunctionalBarNumber = styled.Text`
color: ${COLORS.mainBlack};
font-family: ${FONTS.light};
font-size: 13px;
`;

const FunctionalBarBlock = styled.View`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
width: 100%;
`;
const FunctionalBarBlockButton = styled.TouchableOpacity`
padding: 0px 14px;
height: 42px;
border-color: ${COLORS.borderDarkGray};
border-width: 1px;
margin: 12px 0px;
display: flex;
background-color: white;
border-radius: 5px;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
`;
const FunctionalBarBlockButtonImage = styled.Image`

`;
const FunctionalBarBlockButtonText = styled.Text`
font-size: 13px;
margin-left: 15px;
font-family: ${FONTS.light};
color: ${COLORS.mainBlack};
`;

export const style = {
Container: Container,
FunctionalBar: FunctionalBar,
FunctionalBarBlockTitle:FunctionalBarBlockTitle,
FunctionalBarText: FunctionalBarText,
FunctionalBarNumber: FunctionalBarNumber,
CollectionsContainer: CollectionsContainer,
FunctionalBarBlock:FunctionalBarBlock,
FunctionalBarBlockButton:FunctionalBarBlockButton,
FunctionalBarBlockButtonImage:FunctionalBarBlockButtonImage,
FunctionalBarBlockButtonText:FunctionalBarBlockButtonText,
}