import styled from "styled-components";

import F from 'res/fonts'
import C from 'res/colors'

const Container = styled.div`
    width: 84vw;
    margin: 0 auto;
    margin-top: 35px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1099px) {
    width: 88vw;
    }
    @media screen and (max-width: 710px) {
    width: 92vw;
    }
    @media screen and (max-width: 576px) {
        margin-top: 32px;
    }
`;
const ContainerBlockBorder = styled.span`
    width: 1px;
    display: block;
    height: inherit;
    margin-bottom: 30px;
    background-color: ${C.borderGray};
`;

const ContainerBlock = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x :scroll;
    scroll-behavior: smooth;
    position: relative;
    margin-left: 8px;
    padding-bottom:25px;
::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#ffffff));
    background: linear-gradient(180deg, #ffffff, #ffffff);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: -webkit-gradient(linear, left top, left bottom, from(${C.mainBlue}), to(#0084ff));
    background: linear-gradient(180deg, ${C.mainBlue}, #0084ff);
  }

`;

const FloorColumn = styled.div`
border-right: 1px solid ${C.borderGray};
padding-right: 8px;
height: fit-content;
`
const Item = styled.div`
border-radius:8px;
border: 1px solid ${C.borderGray};
width: 32px;
background-color : ${C.backgroundGray};
display: flex;
align-items: center;
justify-content: center;
user-select: none;
margin-bottom: 8px;

@media screen and (max-width: 450px) {
    width: 27px;
    }
`
const FloorColumnHeader = styled(Item)`
    height: 32px;
`;
const FloorItems = styled(Item)`
    height: 52px;

`;
const FloorItemsNumber = styled.span`
    color: ${C.secondBlack};
    font-family: ${F.medium};
    font-size: 13px;
`;

export const style = {
    Container: Container,
    FloorItems: FloorItems,
    FloorItemsNumber: FloorItemsNumber,
    FloorColumn: FloorColumn,
    FloorColumnHeader: FloorColumnHeader,
    ContainerBlock: ContainerBlock,
    ContainerBlockBorder: ContainerBlockBorder,
}