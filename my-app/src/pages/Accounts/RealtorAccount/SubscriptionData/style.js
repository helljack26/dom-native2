import styled from "styled-components";
import C from 'res/colors'
import F from 'res/fonts'
import { M } from 'res/mixin'

const Container = styled.div`
padding: 0px 10px;
margin: 0 auto;
margin-top: -38px;
width: 100%;
max-width: 1200px;
@media screen and (max-width: 1099px) {
padding: 0px 0px;
}
@media screen and (max-width: 992px) {
margin-top: -20px;
}
@media screen and (max-width: 576px) {
margin-top:0px;
}
`;
const ContainerBlock = styled.div`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 26px;
margin-top: 20px;
@media screen and (max-width: 992px) {
margin-top: 28px;
}
@media screen and (max-width: 768px) {
margin-top: 17px;
}
@media screen and (max-width: 576px) {
grid-template-columns: 1fr;
margin-top: 25px;
}
@media screen and (max-width: 400px) {

}
`;

const ContainerHeader = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
column-gap: 14px;

position: relative;
@media screen and (max-width: 610px) {
flex-direction: column-reverse;   
row-gap: 30px;
}
@media screen and (max-width: 400px) {
row-gap: 20px;
}
`;
const ContainerHeaderBlock = styled.div`

`;
const HeaderText = styled(M.HeaderH1)`
font-size: 22px;
@media screen and (max-width: 450px) {
font-size: 20px;
}
`;
const ContainerBlockRow = styled.div`
`;
const ContainerBlockRowTitle = styled.span`
font-size: 17px;
font-family: ${F.light};
color: ${C.secondBlack};
margin-right: 4px;
@media screen and (max-width: 450px) {
font-size: 15px;
}
`;
const ContainerBlockRowValue = styled.span`
font-size: 17px;
font-family: ${F.light};
color: ${C.mainBlack};
@media screen and (max-width: 450px) {
font-size: 15px;
}
`;

const LinkToAddNewObject = styled.button`
padding: 15px 28px;
min-width: 350px;
width: 350px;
background-color: ${C.mainBlue};
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
transition: all 0.3s ease-in-out;
&:hover{
background-color: ${C.hoverBlue};
}
@media screen and (max-width: 500px) {
&:hover{
background-color: ${C.mainBlue};
}
}
@media screen and (max-width: 450px) {
min-width: 100%;
width: 100%;
}
`;
const LinkToAddNewObjectText = styled.span`
color: white;
font-size: 13px;
font-weight: 100;
white-space: nowrap;
font-family: ${F.regular};
user-select: none;
`;

const DropApartmentTypeBlock = styled.div`
min-width: 350px;
width: 350px;
@media screen and (max-width: 450px) {
min-width: 100%;
width: 100%;
}
`;
const Drop = styled.div`
margin-top: 8px;
position: relative;
cursor: pointer;
color: ${C.secondBlack};
background-color: white;
border-radius: 5px;
border: 1px solid ${C.borderGray};
user-select: none;
&:focus {
outline: none;
}
&:hover {
background-color: whitesmoke;
}
`;
const DropHeader = styled.span`
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
white-space: nowrap;
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
const DropContainer = styled.div`
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