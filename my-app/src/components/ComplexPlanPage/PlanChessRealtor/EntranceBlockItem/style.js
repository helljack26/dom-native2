import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const ApartmentSmallCell = styled.TouchableOpacity`
display: flex;
flex-direction:column;
justify-content: center;
padding: 12px;
position:relative;
background-color: white;
border-radius: 8px;;
/* border-color: ${props => props.borderActive || C.secondBlack}; */
border-width: 1.5px;
z-index:10;
height: 52px;
width:117px;
`;
const ApartmentSmallCellHeader = styled.Text`
    color: ${C.secondBlack};
    font-family: ${F.medium};
    font-size: 13px;
    margin-bottom: 4px;
`;
const ApartmentSmallCellPrice = styled.Text`
    color: ${C.secondBlack};
    font-family: ${F.light};
    font-size: 11px;
`;
const ApartmentSmallCellCol = styled.View`
    display: flex;
    flex-direction: column;
`;
const ApartmentSmallCellDisable = styled.View`
    background-color: ${C.backgroundGray};
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: center;
    position:relative;
    background-color: white;
    border-radius: 8px;
    border-color: ${C.borderGray};
    border-width: 1px;
    z-index:10;
    height: 52px;
    width:117px;
    padding: 0px;
    
`;
const ApartmentSmallCellReserved = styled(ApartmentSmallCellDisable)`
    justify-content: space-between;
    padding: 0px 12px;
    
`;
const ApartmentSmallCellDisableText = styled.Text`
    color: #a6a6a6;
    font-family: ${F.light};
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