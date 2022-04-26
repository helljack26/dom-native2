import styled from "styled-components";

import FONTS from 'res/fonts'
import COLORS from 'res/colors'

const ApartmentSmallCell = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
padding: 12px;
position:relative;
background-color: white;
border-radius: 8px;
border: 1px solid ${COLORS.borderGray};
user-select: none;
cursor: pointer;
z-index:10;
height: 52px;
width:117px;
transition: all 0.3s ease-in-out;

:hover{
background-color: ${COLORS.backgroundGray};
}
`;
const ApartmentSmallCellHeader = styled.span`
    color: ${COLORS.secondBlack};
    font-family: ${FONTS.medium};
    font-size: 13px;
    margin-bottom: 4px;
`;
const ApartmentSmallCellPrice = styled.span`
    color: ${COLORS.secondBlack};
    font-family: ${FONTS.light};
    font-size: 11px;
`;
const ApartmentSmallCellCol = styled.div`
    display: flex;
    flex-direction: column;
`;
const ApartmentSmallCellDisable = styled(ApartmentSmallCell)`
    cursor: default;
    background-color: ${COLORS.backgroundGray};
    pointer-events: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 0;
    
`;
const ApartmentSmallCellReserved = styled(ApartmentSmallCellDisable)`
    justify-content: space-between;
    padding: 0px 12px;
    
`;
const ApartmentSmallCellDisableText = styled.span`
    color: ${COLORS.secondBlack};
    filter: brightness(1.5);
    font-family: ${FONTS.light};
    font-size: 12px;
    text-align: center;
`;
export const style = {
    ApartmentSmallCell: ApartmentSmallCell,
    ApartmentSmallCellHeader: ApartmentSmallCellHeader,
    ApartmentSmallCellPrice: ApartmentSmallCellPrice,
    ApartmentSmallCellCol: ApartmentSmallCellCol,
    ApartmentSmallCellDisable: ApartmentSmallCellDisable,
    ApartmentSmallCellReserved: ApartmentSmallCellReserved,
    ApartmentSmallCellDisableText: ApartmentSmallCellDisableText,
}