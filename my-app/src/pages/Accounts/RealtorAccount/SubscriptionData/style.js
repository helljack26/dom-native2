import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.View`
width: 100%;
`;
const ContainerBlock = styled.View`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 20px;
`;

const ContainerHeader = styled.View`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ContainerHeaderBlock = styled.View`

`;
const HeaderText = styled(M.HeaderH1)`
font-size: 20px;

`;
const ContainerBlockRow = styled.View`
`;
const ContainerBlockRowTitle = styled.Text`
font-family: ${F.light};
color: ${C.secondBlack};
margin-right: 4px;
font-size: 15px;

`;
const ContainerBlockRowValue = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 15px;
`;

const LinkToAddNewObject = styled.TouchableOpacity`
padding: 15px 0px;
background-color: ${C.mainBlue};
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
`;
const LinkToAddNewObjectText = styled.Text`
color: white;
font-size: 13px;
font-weight: 100;
font-family: ${F.regular};
`;

const DropApartmentTypeBlock = styled.View`
min-width: 350px;
width: 350px;
@media screen and (max-width: 450px) {
min-width: 100%;
width: 100%;
}
`;
const Drop = styled.View`
margin-top: 8px;
position: relative;
color: ${C.secondBlack};
background-color: white;
border-radius: 5px;
border: 1px solid ${C.borderGray};
`;
const DropHeader = styled.Text`
background-color: white;
width: 100%;
display: flex;
padding: 5px 0px;
line-height: 2rem;
background-size: 11px 10px;
background-repeat: no-repeat;
background-position-x: calc(100% - 15px);
background-position-y: 50%;
transition: all 0.3s ease-in-out;
padding-left: 13px;
padding-right: 20px;
align-items: center;
border: none;
font-weight: 100;
font-family: ${F.light};
font-size: 17px;
&:focus {
outline: none;
}
&:hover {
background-color: rgba(241, 241, 241, 0.466);
}
@media screen and (max-width: 450px) {
font-size: 15px;
}
`;
const DropContainer = styled.View`
width: 100%;
position: absolute;
top: 100%;
left: 0px;
z-index: 999;
background-color: white;
`;
const DropContainerList = styled.ul`
width: 100%;
border: 1px solid ${C.borderGray};
`;
const DropContainerLi = styled.li`
font-family: ${F.light};
font-size: 17px;
width: 100%;
display: flex;
align-items: center;
padding: 10px 0px;
padding-left: 15px;
line-height: 2rem;
transition: all 0.3s ease-in-out;
background-color: ${props => props.isActive && C.backgroundGray};
list-style-type: none;
&:hover {
background-color: rgba(241, 241, 241, 0.466);
}
@media screen and (max-width: 450px) {
font-size: 15px;
}
`;
export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    ContainerHeader: ContainerHeader,
    ContainerHeaderBlock: ContainerHeaderBlock,
    ContainerBlockRow: ContainerBlockRow,
    ContainerBlockRowTitle: ContainerBlockRowTitle,
    ContainerBlockRowValue: ContainerBlockRowValue,
    HeaderText: HeaderText,
    LinkToAddNewObject: LinkToAddNewObject,
    LinkToAddNewObjectText: LinkToAddNewObjectText,
    DropApartmentTypeBlock: DropApartmentTypeBlock,
    Drop: Drop,
    DropHeader: DropHeader,
    DropContainer: DropContainer,
    DropContainerList: DropContainerList,
    DropContainerLi: DropContainerLi,
}