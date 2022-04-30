import styled from "styled-components";

import F from 'res/fonts'
import C from 'res/colors'

const Popup = styled.div`
width: ${props => props.scrollWidth - 8 + 'px'};
height: inherit;
position: absolute;
background-color: #9aceff10;
z-index: 990;
top:0;
left:0;
right:0;
bottom:0;
padding-left: ${props => props.clientX + 'px'};
margin-top: 40px;
border-radius: 8px;
margin-bottom: 25px;
padding-top: 14px;
`;
const PopupContainer = styled.div`
width: fit-content;
height: fit-content;
position: relative;
`
const PopupBlock = styled.div`
width: 300px;
min-height: 350px;
height: fit-content;
background-color: white;
border-radius: 8px;
border: 1px solid ${C.borderGray};
display: flex;
flex-direction:column;
align-items: center;
padding: 17px 20px;
@media (max-width: 450px) {
padding:12px 16px;
width: 270px;
min-height: 330px;
}
`;
const PopupHeader = styled.div`
display: flex;
user-select: none;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const PopupHeaderNumber = styled.span`
color: ${C.mainBlack};
font-family: ${F.regular};
font-size: 19px;
@media (max-width: 450px) {
  font-size: 17px;
}
`;
const PopupHeaderClose = styled.button`
position: absolute;

top: 0px;
right: 0px; 
`;
const PopupImageBlock = styled.div`
width: 100%;
user-select: none;
height: 152px;
overflow: hidden;
border-radius: 8px;
border: 1px solid ${C.borderGray};
margin-top: 17px;
@media (max-width: 450px) {
  margin-top: 12px;
}
`;
const PopupDetails = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: relative;
padding-right: 30px;
`;
const PopupDetailsCol = styled.div`
display: flex;
margin-top: 13px;
flex-direction: column;
`;
const PopupDetailsPrice = styled.span`
    color: ${C.mainBlack};
    font-family: ${F.medium};
    font-size: 15px;
`;
const PopupDetailsName = styled.span`
margin-top: 11px ;
margin-bottom: 10px ;
    color: ${C.mainBlack};
    font-family: ${F.medium};
    font-size: 19px;
    @media (max-width: 450px) {
  font-size: 17px;
margin-bottom: 8px ;

}
`;
const PopupDetailsArea = styled.span`
    color: ${C.mainBlack};
    font-family: ${F.light};
    font-size: 14px;
    @media (max-width: 450px) {
  font-size: 12px;
}
`;
const PopupDetailsButtons = styled.div`
position: absolute;
top: 7px;
right: 0;
display: flex;
flex-direction: row;
column-gap: 5px;
`;
const PopupFooter = styled.div`
margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const PopupFooterBlock = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PopupFooterInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PopupFooterInfoText = styled.span`
font-size: 14px;
margin-right: 15px;
margin-left: 10px;
margin-top: 2px;
font-family: ${F.light};
color: ${C.mainBlack};
@media (max-width: 450px) {
  font-size: 12px;
}
`;
const PopupFooterLink = styled.a`

`;
const PopupFooterLinkText = styled.span`
font-size: 13.3px;
color: ${C.mainBlue};
font-family: ${F.medium};
&:hover {
    text-decoration: underline;
    color: ${C.hoverBlue};
}
`;

export const style = {
  Popup: Popup,
  PopupContainer: PopupContainer,
  PopupBlock: PopupBlock,
  PopupHeader: PopupHeader,
  PopupHeaderNumber: PopupHeaderNumber,
  PopupHeaderClose: PopupHeaderClose,
  PopupImageBlock: PopupImageBlock,
  PopupDetails: PopupDetails,
  PopupDetailsCol: PopupDetailsCol,
  PopupDetailsPrice: PopupDetailsPrice,
  PopupDetailsName: PopupDetailsName,
  PopupDetailsArea: PopupDetailsArea,
  PopupDetailsButtons: PopupDetailsButtons,
  PopupFooter: PopupFooter,
  PopupFooterBlock: PopupFooterBlock,
  PopupFooterInfo: PopupFooterInfo,
  PopupFooterInfoText: PopupFooterInfoText,
  PopupFooterLink: PopupFooterLink,
  PopupFooterLinkText: PopupFooterLinkText,
}