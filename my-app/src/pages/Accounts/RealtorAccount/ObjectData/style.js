import styled from "styled-components";
import C from 'res/colors'
import F from 'res/fonts'

const Container = styled.div`
margin: 0px 10px;
margin-top: -32px;
width: 100%;
@media screen and (max-width: 992px) {
margin: 0px 0px;
}
`;
const ContainerBlock = styled.div`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 26px;
margin-top: 38px;
@media screen and (max-width: 576px) {
margin-top: 30px;
}
@media screen and (max-width: 400px) {
margin-top: 20px;
}
`;
const ContainerButtonsBlock = styled.div`
width: 100%;
display: flex;
flex-direction: row;
/* align-items: center; */
justify-content: space-between;
column-gap: 14px;
@media screen and (max-width: 610px) {
flex-direction: column-reverse;   
row-gap: 30px;
}
@media screen and (max-width: 400px) {
row-gap: 20px;

}
`;
const SwitchBlock = styled.div`
border-radius: 4px;
overflow: hidden;
border: 1px solid ${C.mainBlack};
display: flex;
width: fit-content;
flex-direction: row;
@media screen and (max-width: 610px) {
width: 100%;
justify-content: space-between;
}
`;

const SwitchButton = styled.button`
padding: 13px 18px;
white-space: nowrap;
background-color: ${props => props.isActiveButton ? C.mainBlue : 'white'};
color: ${props => props.isActiveButton ? 'white' : C.mainBlack};
@media screen and (max-width: 610px) {
width: 100%;
padding: 13px 0px;
}
`;

const SwitchBlockButtonTextDesktop = styled.div`
font-size: 13px;
font-family: ${F.light};
@media screen and (max-width: 450px) {
display: none;
}
`;
const SwitchBlockButtonTextMobile = styled.div`
display: none;

@media screen and (max-width: 450px) {
font-size: 13px;
display: inline-block;   
}
`;
const LinkToAddNewObject = styled.a`
padding: 15px 30px;
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

@media screen and (max-width: 610px) {
width: 60%;
padding: 13px 0px;
}
@media screen and (max-width: 576px) {
width: 100%;
}
`;
const LinkToAddNewObjectText = styled.span`
color: white;
font-size: 13px;
font-weight: 100;
font-family: ${F.regular};
@media screen and (max-width: 610px) {
font-size: 16px;
}
`;

export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    SwitchBlock: SwitchBlock,
    SwitchButton: SwitchButton,
    SwitchBlockButtonTextDesktop: SwitchBlockButtonTextDesktop,
    SwitchBlockButtonTextMobile: SwitchBlockButtonTextMobile,
    ContainerButtonsBlock: ContainerButtonsBlock,
    LinkToAddNewObject: LinkToAddNewObject,
    LinkToAddNewObjectText: LinkToAddNewObjectText,
}