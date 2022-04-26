import styled from "styled-components";

import FONTS from 'res/fonts'
import COLORS from 'res/colors'

const EntranceColumn = styled.div`
width: fit-content;
padding-right: 8px;
margin-right: 8px;
border-right: 1px solid ${COLORS.borderGray};
`;
const EntranceColumnHeader = styled.div`
  border-radius:8px;
  border: 1px solid ${COLORS.borderGray};
  width: 100%;
  height: 32px;
  padding: 0px 15px;
  background-color : ${COLORS.backgroundGray};
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

`;
const EntranceColumnHeaderText = styled.span`
    color: ${COLORS.secondBlack};
    font-family: ${FONTS.medium};
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