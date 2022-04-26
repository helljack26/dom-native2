import React from "react";

import EntranceBlock from "./EntranceBlock/EntranceBlock";
import { useHorizontalScroll } from "components/helpers/useHorizontalScroll";

import { style } from './style'

// Styles
const {
    Container,
    FloorItems,
    FloorItemsNumber,
    FloorColumn,
    FloorColumnHeader,
    ContainerBlock,
    ContainerBlockBorder,
} = style;

const PlanChessUser = ({ planEntrance }) => {
    const scrollRef = useHorizontalScroll();

    if (planEntrance === undefined) return

    // Side floor indication
    const FloorIndication = () => {
        const floorNumber = planEntrance[0].floors.length;
        const floorItems = [];
        for (let i = 1; i <= floorNumber; i++) {
            floorItems.unshift(i)
        }
        const floorColumn = <FloorColumn>
            <FloorColumnHeader>
                <FloorItemsNumber>
                    эт.
                </FloorItemsNumber>
            </FloorColumnHeader>
            {floorItems.map((item, id) => <FloorItems key={id}>
                <FloorItemsNumber>
                    {item}
                </FloorItemsNumber>
            </FloorItems>)}
        </FloorColumn>

        return floorColumn;
    }

    return (<>
        <Container>
            <FloorIndication />

            <ContainerBlock
                ref={scrollRef}>
                {planEntrance.map((item, id) => <EntranceBlock entranceData={item} key={id} />)}
            </ContainerBlock>

            <ContainerBlockBorder></ContainerBlockBorder>
        </Container>
    </>
    )
}
export default PlanChessUser;