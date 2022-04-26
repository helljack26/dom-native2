import React from "react";
import { style } from './style'
import { useLocation } from "react-router-dom"

import EntranceBlockItem from '../EntranceBlockItem/EntranceBlockItem'

// Styles
const {
    EntranceColumn,
    EntranceColumnHeader,
    EntranceColumnHeaderText,
    FloorRowBlock,
} = style;

const EntranceBlock = ({ entranceData }) => {
    const {
        entranceNumber,
        floors
    } = entranceData;
    // Get hash from url if it exist
    const location = useLocation();
    const hash = Number(location.hash.slice(1))

    const FloorRow = ({ floor }) => {
        const { apartments } = floor;
        return (
            <FloorRowBlock>
                {apartments.map((item, id) => {
                    const isOpenPopup = (item.id === hash)
                    return (<EntranceBlockItem
                        isOpenPopup={isOpenPopup}
                        apartmentData={item}
                        key={id} />)
                })}
            </FloorRowBlock>
        )
    }

    return (
        <EntranceColumn>
            <EntranceColumnHeader>
                <EntranceColumnHeaderText>
                    {entranceNumber} подъезд
                </EntranceColumnHeaderText>
            </EntranceColumnHeader>

            {floors.map((item, id) => <FloorRow floor={item} key={id} />)}

        </EntranceColumn>
    )
}
export default EntranceBlock;