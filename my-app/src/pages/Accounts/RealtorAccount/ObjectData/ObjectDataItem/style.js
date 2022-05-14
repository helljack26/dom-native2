import styled from "styled-components";

import F from 'res/fonts'
import C from 'res/colors'

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;
border-radius: 8px;
padding: 14px 14px;
`;
const ItemContainerBlock = styled.div`
display: flex;
flex-direction: row;
width: 100%;
@media screen and (max-width: 650px) {
    flex-direction: column;
}
`;


const ItemColImageBlock = styled.a`
min-width: 238px;
height: 134px;
overflow: hidden;
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;
@media screen and (max-width: 960px) {
    height: fit-content;
    >img{
        margin-bottom: -5px;
    }
}
@media screen and (max-width: 850px) {
min-width: 220px;   
height: 140px;
}
@media screen and (max-width: 650px) {
height: fit-content;
margin-bottom: 10px;
}
`;
const ItemContainerItemCol = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 78%;
margin-left: 14px;
border-bottom-color: ${C.borderGray};
border-bottom-width: 1px;
border-bottom-style: solid;
@media screen and (max-width: 960px) {
    flex-direction: column;
}
@media screen and (max-width: 650px) {
margin-left: 0px;
width:100%;
}
`;
const ItemColInfoBlock = styled.div`
max-width: 460px;
display: flex;
flex-direction: column;
padding-bottom: 10px;
@media screen and (max-width: 650px) {
    max-width:100%;
}
@media screen and (max-width: 400px) {
    padding-bottom: 14px;
}
`;

const PriceBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

@media screen and (max-width: 876px) {
font-size: 13px;
}
@media screen and (max-width: 400px) {
font-size: 13px;
}
`;

const Price = styled.span`
font-size: 15px;
font-family: ${F.medium};
white-space: nowrap;
@media screen and (max-width: 400px) {
font-size: 14px;
}
`;
const NewPrice = styled(Price)`
margin-right: 13px;
color: ${C.mainBlue};
`;
const OldPrice = styled(Price)`
text-decoration: line-through;
`;
const CatalogItemInfoName = styled.a`
font-size: 18.8px;
font-family: ${F.medium};
margin-bottom: 8px;
margin-top: 8px;
@media screen and (max-width: 1100px) {
font-size: 17px;
}
@media screen and (max-width: 992px) {
font-size: 16px;
}
@media screen and (max-width: 500px) {
font-size: 17px;
}
@media screen and (max-width: 400px) {
font-size: 15px;
}
`;
const CatalogItemInfoPlace = styled.span`
font-size: 13.3px;
font-family: ${F.light};
margin-bottom: 10px;
@media screen and (max-width: 576px) {
font-size: 12px;
}
@media screen and (max-width: 400px) {
margin-bottom: 5px;
}
`;
const CatalogItemInfoSize = styled(CatalogItemInfoPlace)`
margin-bottom: 0px;
`;
const ItemColRightBlock = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
flex-direction: column;
padding-bottom: 10px;
margin-left: 10px;
@media screen and (max-width: 960px) {
flex-direction: row;
width: 100%;
align-items: flex-end;
margin-left: 0px;
}
@media screen and (max-width: 576px) {
padding-bottom: 14px;
}
@media screen and (max-width: 400px) {
/* flex-direction: column-reverse; */
/* row-gap: 14px; */
align-items: flex-end;
}
`;
const ItemColRightBlockButtons = styled.div`
display: flex;
align-items: center;
flex-direction: row;
column-gap: 10px;
margin-left: 10px;
@media screen and (max-width: 400px) {
margin-left: 0px;
width: 100%;
justify-content: flex-end;
/* flex-direction: row-reverse; */
}
`;
const MessageButton = styled.button`
height: 42px;
width: 140px;
border-color: ${props => props.isActive ? C.mainBlue : 'gray'};
cursor: ${props => props.isActive ? 'pointer' : 'default'};
border-width: 1px;
border-style: solid;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
@media screen and (max-width: 400px) {
width: 100%;
}
`;
const MessageButtonImage = styled.span`
margin-right: 10px;
width : 18px;
height: 18px;
mask-size: contain;
mask-repeat: no-repeat;
mask-position: center;
mask: url(${props => props.buttonImage});
background: ${props => props.isActive ? C.mainBlue : C.secondBlack};
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
transform: scale(0.8);
/* &:hover{
background-color: ${C.mainBlue};
color: ${C.mainBlue};
} */
`;
const MessageButtonText = styled.span`
font-size: 13px;
font-family: ${F.light};
color: ${props => props.isActive ? C.mainBlue : C.secondBlack};
`;
const ItemContainerFooter = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-top: 10px;
@media screen and (max-width: 960px) {
align-items: center;
row-gap: 14px;
flex-direction: column;
width: 100%;
align-self:center;
}
@media screen and (max-width: 576px) {
margin-top: 14px;
    
}
`;
const ItemContainerFooterButtons = styled.div`
display: flex;
align-items: center;
flex-direction: row;
column-gap: 14px;
@media screen and (max-width: 960px) {
width: 100%;
justify-content: space-evenly;
}
@media screen and (max-width: 400px) {
flex-wrap: wrap;
row-gap: 14px;
}
`;
const FooterButton = styled.button`
height: 42px;
padding: 0px 20px;
cursor: pointer ;
border-style: solid;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
transition: all 0.3s ease-in-out;
border-color: black;
border-radius: 4px;
border-width: ${props => !props.isActive ? 1 + 'px' : 0 + 'px'};
background-color: ${props => props.isActive ? C.mainBlue : 'white'};
&:hover{
    background-color: ${props => props.isActive ? C.hoverBlue : C.borderGray};
}
@media screen and (max-width: 1230px) {
    padding: 0px 15px;
}
@media screen and (max-width: 960px) {
    width: 100%;
    padding: 0px 0px;  
}
`;
const FooterButtonImage = styled.img`
margin-right: 15px;

`;
const FooterButtonText = styled.span`
font-family: ${props => props.isActive ? F.medium : F.regular};
color: ${props => props.isActive ? 'white' : C.mainBlack};
font-size: 13px;
@media screen and (max-width: 400px) {
font-size: 15px;
    
}
`;
const HideOnMobile = styled.div`
display: flex;
width: 100%;
@media screen and (max-width: 576px) {
display: none;
}
`;
export const style = {
    ItemContainer: ItemContainer,
    ItemContainerBlock: ItemContainerBlock,
    ItemContainerItemCol: ItemContainerItemCol,
    ItemColImageBlock: ItemColImageBlock,
    ItemColInfoBlock: ItemColInfoBlock,
    PriceBlock: PriceBlock,
    NewPrice: NewPrice,
    OldPrice: OldPrice,
    Price: Price,
    CatalogItemInfoName: CatalogItemInfoName,
    CatalogItemInfoPlace: CatalogItemInfoPlace,
    CatalogItemInfoSize: CatalogItemInfoSize,
    ItemColRightBlock: ItemColRightBlock,
    ItemColRightBlockButtons: ItemColRightBlockButtons,
    MessageButton: MessageButton,
    MessageButtonImage: MessageButtonImage,
    MessageButtonText: MessageButtonText,
    ItemContainerFooter: ItemContainerFooter,
    ItemContainerFooterButtons: ItemContainerFooterButtons,
    FooterButton: FooterButton,
    FooterButtonImage: FooterButtonImage,
    FooterButtonText: FooterButtonText,
    HideOnMobile: HideOnMobile,
}