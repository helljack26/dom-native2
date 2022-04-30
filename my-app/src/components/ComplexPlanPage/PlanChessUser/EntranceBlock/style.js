import styled from "styled-components";

import F from 'res/fonts'
import C from 'res/colors'

const EntranceColumn = styled.div`
width: fit-content;
padding-right: 8px;
margin-right: 8px;
border-right: 1px solid ${C.borderGray};
`;
const EntranceColumnHeader = styled.div`
  border-radius:8px;
  border: 1px solid ${C.borderGray};
  width: 100%;
  height: 32px;
  padding: 0px 15px;
  background-color : ${C.backgroundGray};
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

`;
const EntranceColumnHeaderText = styled.span`
    color: ${C.secondBlack};
    font-family: ${F.medium};
    font-size: 13px;
`;
const FloorRowBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  column-gap: 8px;

`;
export const style = {
  EntranceColumn: EntranceColumn,
  EntranceColumnHeader: EntranceColumnHeader,
  EntranceColumnHeaderText: EntranceColumnHeaderText,
  FloorRowBlock: FloorRowBlock,
}