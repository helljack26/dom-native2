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
@media screen and (max-width: 992px) {
margin-top: -20px;
}
@media screen and (max-width: 767px) {
padding: 0px 10px;
}
@media screen and (max-width: 576px) {
margin-top:0px;
padding: 0px 0px;

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
@media screen and (max-width: 820px) {
display:grid;
grid-template-columns: 1fr 1fr;
column-gap: 4vw;
row-gap: 20px;
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
margin-bottom: 5px;
font-size: 22px;
@media screen and (max-width: 450px) {
font-size: 20px;
}
`;
const HeaderSubText = styled.span`
font-size: 14px;
font-family: ${F.light};
color: ${C.mainBlack};
@media screen and (max-width: 450px) {
    font-size: 12px;
    
}
`;
const Drop = styled.div`
color: ${C.secondBlack};
width: fit-content;
height: fit-content;
position: absolute;
display: flex;
align-items: flex-end;
flex-direction: column;
row-gap: 15px;
top: 0px;
right: 0px;
z-index: 999;
&:focus {
    outline: none;
}

`;
const DropContainer = styled.form`
width: 320px;
box-shadow: -1px 2px 21px 1px rgba(0,0,0,0.20);
-webkit-box-shadow: -1px 2px 21px 1px rgba(0,0,0,0.20);
-moz-box-shadow: -1px 2px 21px 1px rgba(0,0,0,0.20);
top: 120%;
padding: 16px;
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;
z-index: 999;
background-color: white;
@media screen and (max-width: 400px) {
    margin-right: 3vw;
    width:85vw;
}
`;
const FormInputBlock = styled.div`
display: flex;
flex-direction: column;
position:relative;
margin-top: 3px;
margin-bottom: 26px;
`;

const FormInputLabel = styled.div`
font-size: 13.5px;
font-family: ${F.light};
color: ${C.mainBlack};
margin-bottom: 10px;
user-select:none;
display: flex;
flex-direction: row;
flex-wrap: wrap;

@media screen and (max-width: 730px) {
font-size: 14px;
}
@media screen and (max-width: 500px) {
font-size: 15px;
}
@media screen and (max-width: 400px) {
font-size: 13px;
}

`;
const FormInput = styled.input`
font-size: 13.5px;
padding-left: 14px;
padding-right: 10px;
padding-right: ${props => props.placeForIcon && 30 + 'px'};
padding-right: ${props => props.placeForPlotValue && 50 + 'px'};
width: inherit;
font-family: ${F.light};
color: ${C.mainBlack};
outline-color: ${C.borderGray};
outline-width: 1px;
outline-style: solid;
border-radius: 4px;
border:none;
height:44px;
width:100%;
&:focus{
outline-width: 2px;
outline-color: ${C.mainBlue};
}
&:focus + ${FormInputLabel}{
color: ${C.mainBlue};
}
@media screen and (max-width: 500px) {
font-size: 15px;
}
@media screen and (max-width: 500px) {
font-size: 16px;
}

`;
const ButtonSubmit = styled(M.ButtonBlue)`
width: 100%;
`;
const ButtonSubmitText = styled.span`

`;
const ErrorMessage = styled.span`
color: red;
user-select: none;
font-size: 13.5px;
white-space: nowrap;
position:absolute;
bottom:-18px ;
left:0px ;
`;
const LinkToAddNewObject = styled.a`
padding: 15px 28px;
width: fit-content;
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
border-radius: 50%;
padding: 8px 8px;
&:hover{
background-color: ${C.mainBlue};
}
}
`;
const LinkToAddNewObjectText = styled.span`
color: white;
font-size: 13px;
font-weight: 100;
white-space: nowrap;
font-family: ${F.regular};
user-select: none;
@media screen and (max-width: 500px) {
    display: none;
}
`;
const LinkToAddNewObjectIconMobile = styled.button`
display: none;
@media screen and (max-width: 500px) {
position: absolute;
top: 0px;
bottom: 0px;
right: 0px;
mask: url(${props => props.source});
mask-size: 20px 20px;
mask-repeat: no-repeat;
mask-position: center;
background: white;
display: inline-block;
width : 30px;
height: 30px;
position: relative;
transition: all 0.3s ease-in-out;
}
`;
const LinkToAddNewObjectIconMobileCross = styled(LinkToAddNewObjectIconMobile)`
mask: url(${props => props.source});
mask-size: 15px 15px;
mask-repeat: no-repeat;
mask-position: center;
`;
const EmployeeItem = styled.div`
width: 100%;
display: flex;
position: relative;
justify-content: flex-start;
align-items: center;
flex-direction: row;
padding: 15px;
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;
@media screen and (max-width: 820px) {
align-items: flex-start;
}
`;
const EmployeeItemBlock = styled.div`
width: 100%;
display: flex;
column-gap: 10px;
justify-content: flex-start;
align-items: center;
flex-direction: row;
@media screen and (max-width: 820px) {
display: flex;
align-items: center;
flex-direction: column;
row-gap: 12px;
justify-content: center;
text-align: center;
}
@media screen and (max-width: 576px) {
column-gap: 20px;
flex-direction: row;
justify-content: flex-start;
text-align: left;
}
@media screen and (max-width: 400px) {
display: flex;
align-items: center;
flex-direction: column;
row-gap: 12px;
justify-content: center;
text-align: center;
}
`;
const EmployeeInfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-content: flex-start;
align-items: center;
width: 100%;
column-gap: 10px;
padding-right: 40px;
@media screen and (max-width: 1070px) {
grid-template-columns:  1fr 1fr 1fr;
}
@media screen and (max-width: 820px) {
display: flex;
align-items: center;
flex-direction: column;
row-gap: 12px;
text-align: center;
padding-right: 0px;

}
@media screen and (max-width: 576px) {
align-items: flex-start;
padding-right: 40px;
text-align: left;
}
@media screen and (max-width: 400px) {
align-items: center;
text-align: center;
padding-right: 0px;
}
`;
const EmployeeImage = styled.div`
min-width: 46px;
min-width: 46px;
height: 46px;
height: 46px;
border-radius: 50%;
overflow: hidden;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;

@media screen and (max-width: 820px) {
min-width: 100px;
min-height: 100px;
}
@media screen and (max-width: 400px) {
min-width: 150px;
min-height: 150px;
}
`;
const EmployeeInfoBlock = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 576px) {
    align-items: flex-start;
}
@media screen and (max-width: 400px) {
    align-items: center;
}
`;
const EmployeeInfoName = styled.span`
font-size: 15px;
font-family: ${F.light};
color: ${C.mainBlack};
margin-bottom: 4px;
@media screen and (max-width: 820px) {
    font-family: ${F.medium};
}
@media screen and (max-width: 576px) {
font-size: 17px;   
}
`;
const EmployeeInfoPosition = styled.span`
font-size: 13px;
font-family: ${F.light};
color: ${C.mainBlack};
`;
const EmployeeText = styled.span`
width: fit-content;
font-size: 15px;
font-family: ${F.light};
color: ${C.mainBlack};
`;
const TooltipRemove = styled.div`
padding: 8px 10px;
z-index: 100;
visibility: hidden;
opacity: 0;
transition: visibility 0s, opacity 0.3s linear;
background-color: white;
position: absolute;
user-select: none;
border-radius: 10px;
font-size: 12px;
font-family: ${F.light};
color: ${C.secondBlack};
box-shadow: 1px -1px 14px -3px rgba(0,0,0,0.22);
-webkit-box-shadow: 1px -1px 14px -3px rgba(0,0,0,0.22);
-moz-box-shadow: 1px -1px 14px -3px rgba(0,0,0,0.22);
top:30px;
left:-50%;
@media screen and (max-width: 576px) {
display: none;
}
`;
const ButtonContainer = styled.div`
position: absolute;
top: 0px;
bottom: 0px;
right: 0px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
@media screen and (max-width: 820px) {
    bottom:none;
height: fit-content;
top: 10px;
right: 10px;
}
`;
const ButtonContainedAbsolute = styled.div`
position: relative;
margin-right: 10px;
width: 30px;
height: 30px;
@media screen and (max-width: 820px) {
    margin-right: 0px;
}
`;
const Button = styled.button`
position: absolute;
top: 0px;
bottom: 0px;
right: 0px;
mask: url(${props => props.buttonImage});
mask-size: 15px 15px;
mask-repeat: no-repeat;
mask-position: center;
background: ${C.mainBlack};
display: inline-block;
width : 30px;
height: 30px;
position: relative;
transition: all 0.3s ease-in-out;
&:hover  {
background: ${C.mainBlue};
}
&:hover + ${TooltipRemove} {
visibility: visible;
opacity: 1;
}
@media screen and (max-width: 576px) {
&:hover  {
background: ${C.mainBlack};
}
&:hover + ${TooltipRemove} {
visibility: hidden;
opacity: 0;
}
}
`;

export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    ContainerHeader: ContainerHeader,
    ContainerHeaderBlock: ContainerHeaderBlock,
    HeaderSubText: HeaderSubText,
    HeaderText: HeaderText,
    Drop: Drop,
    DropContainer: DropContainer,
    FormInputBlock: FormInputBlock,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ErrorMessage: ErrorMessage,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    LinkToAddNewObject: LinkToAddNewObject,
    LinkToAddNewObjectText: LinkToAddNewObjectText,
    LinkToAddNewObjectIconMobile: LinkToAddNewObjectIconMobile,
    LinkToAddNewObjectIconMobileCross: LinkToAddNewObjectIconMobileCross,
    EmployeeItem: EmployeeItem,
    EmployeeItemBlock: EmployeeItemBlock,
    EmployeeImage: EmployeeImage,
    EmployeeInfoName: EmployeeInfoName,
    EmployeeInfoPosition: EmployeeInfoPosition,
    EmployeeText: EmployeeText,
    EmployeeInfoBlock: EmployeeInfoBlock,
    EmployeeInfoContainer: EmployeeInfoContainer,
    Button: Button,
    ButtonContainedAbsolute: ButtonContainedAbsolute,
    TooltipRemove: TooltipRemove,
    ButtonContainer: ButtonContainer,
}