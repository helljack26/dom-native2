import styled from "styled-components";
import C from 'res/colors'
import F from 'res/fonts'
import { M } from 'res/mixin'

const Container = styled(M.MainContainer)`
margin-top: 75px;
margin-bottom: 25px;
display: flex;
justify-content: center;
flex-direction: row;
@media screen and (max-width: 767px) {
    margin-top: 55px;
}
@media screen and (max-width: 567px) {
    margin-top: 45px;
}
@media screen and (max-width: 450px) {
    margin-top: 35px;
}
`;
const ContainerBlock = styled.div`
display: flex;
flex-direction: column; 
width: 360px;
@media screen and (max-width: 450px) {
    width:100%;
    margin:0px 17px;
}
`;
const HeaderText = styled(M.HeaderH1)`
font-size: 22.5px;
margin-bottom: 28px;
@media screen and (max-width: 450px) {
    font-size: 21px;
}
`;
const FormBlock = styled.form`
width: 100%;
`;

const FormInputBlock = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 23px;
position:relative;
@media screen and (max-width: 767px) {
width: 100%;
}
`;
const FormInputContainer = styled.div`
position: relative;
`;
const FormInputLabel = styled.label`
font-size: 13.5px;
font-family: ${F.light};
margin-bottom: 5px;
user-select:none;
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media screen and (max-width: 450px) {
font-size: 13px;
}
`;
const FormInput = styled.input`
font-size: 18px;
padding-left: 10px;
width: inherit;
padding-right: 10px;
font-family: ${F.light};
color: ${C.mainBlack};
outline-color: ${C.borderGray};
outline-width: 1px;
outline-style: solid;
border-radius: 4px;
border:none;
height:45px;
width:100%;
&:focus{
outline-color: ${C.mainBlue};
}
&:focus + ${FormInputLabel}{
color: ${C.mainBlue};
}
@media screen and (max-width: 576px) {
    font-size: 16px;
}
`;
const ButtonSubmit = styled(M.ButtonBlue)`
width: 100%;
margin-top: 28px;
`;
const ButtonSubmitText = styled.span`
color: white;
font-size: 13.5px;
font-family: ${F.medium};
font-weight: 100;
`;
const ShowPasswordIconButton = styled.button`
position: absolute;
top: 25%;
right:15px;
display: inline-block;
width : 20px;
height: 20px;
mask: url(${props => props.buttonImage});
mask-size: 20px 20px;
mask-repeat: no-repeat;
mask-position: center;
background: ${props => props.isActive ? C.mainBlue : C.secondBlack};
`;

const Link = styled.a`

`;
const LinkText = styled.span`
font-size: 14px;
font-family: ${F.light};
color: ${C.mainBlue};
transition: all 0.3s ease-in-out;
&:hover  {
    color: ${C.blueHover};
}

@media screen and (max-width: 576px) {
font-size: 13.5px;
}
@media screen and (max-width: 450px) {
font-size: 13px;
}
`;
const AgreementBlock = styled.div`
display: grid;
grid-template-columns: 29px 1fr;
grid-template-rows: 1fr;
margin-top: 30px;
align-items: flex-start;
`;
const AgreementText = styled.span`
font-size: 13px;
line-height: 22px;
margin-top: -5px;
line-height: 16.5px;
margin-left: 8px;
font-family: ${F.light};
color: ${C.secondBlack};

@media screen and (max-width: 450px) {
font-size: 13px;
margin-right: 0px;
margin-bottom: 5px;
}
`;
const FooterBlock = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
margin-top: 20px;
@media screen and (max-width: 450px) {
margin-top: 10px;
flex-direction: column;
}
`;
const FooterText = styled.span`
font-size: 14px;
line-height: 22px;
margin-right: 4px;
margin-top: 3px;
font-family: ${F.light};
color: ${C.secondBlack};
@media screen and (max-width: 576px) {
font-size: 13.5px;
}
@media screen and (max-width: 450px) {
font-size: 13px;
margin-right: 0px;
margin-bottom: 5px;
}
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
const CheckboxBlock = styled.label`
  height: 29px;
  width: 29px;
  display: inline-block;
    border-radius: 4px;
    cursor: pointer;
`;
const Checkbox = styled.input`
opacity: 0;
width: 0px;
height:0px;
`;
const CheckboxImg = styled.span`
  height: 29px;
  width: 29px;

`;

export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    HeaderText: HeaderText,
    FormBlock: FormBlock,
    FormInputBlock: FormInputBlock,
    FormInputContainer: FormInputContainer,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    ShowPasswordIconButton: ShowPasswordIconButton,
    Link: Link,
    LinkText: LinkText,
    AgreementBlock: AgreementBlock,
    AgreementText: AgreementText,
    FooterBlock: FooterBlock,
    FooterText: FooterText,
    ErrorMessage: ErrorMessage,
    CheckboxBlock: CheckboxBlock,
    Checkbox: Checkbox,
    CheckboxImg: CheckboxImg,
}