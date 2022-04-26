import React from "react";
import COLORS from '@/res/colors'

import ScrollIndicator from "react-native-custom-scroll-indicator";
import EntranceBlock from "./EntranceBlock/EntranceBlock";
// import { useHorizontalScroll } from "components/helpers/useHorizontalScroll";

import { style } from './style'

// Styles
const {
    Container,
    FloorItems,
    FloorItemsNumber,
    FloorColumn,
    FloorColumnHeader,
    ContainerBlock,
} = style;

const PlanChessRealtor = ({ planEntrance }) => {
    // const scrollRef = useHorizontalScroll();

    if (planEntrance === undefined) {
        return
    }
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
            {floorItems.map((item, id) => {
                const isLast = (id === floorItems.length - 1)
                const marginBottom = isLast ? 0 : 8
                return <FloorItems
                    style={{
                        marginBottom: marginBottom,
                    }}
                    key={id}>
                    <FloorItemsNumber>
                        {item}
                    </FloorItemsNumber>
                </FloorItems>
            })}
        </FloorColumn>
        return floorColumn;
    }
    
    return (<>
        <Container>

            <FloorIndication />

            <ScrollIndicator
                horizontal={true}
                persistentScrollbar={true}
                showsHorizontalScrollIndicator={true}
                viewBoxStyle={{
                    width: "99%",
                }}
                indicatorBackgroundStyle={{
                    height: 8,
                    width: 205,
                    borderRadius: 4,
                    backgroundColor: 'white',
                }} indicatorStyle={{
                    height: 8,
                    width: 80,
                    backgroundColor: `${COLORS.mainBlue}`,
                    borderRadius: 4
                }} indicatorBoxStyle={{
                    width: "99%",
                    justifyContent: "center",
                    alignItems: "center"
                }} scrollViewBoxStyle={{
                    borderWidth: 0,
                    width: "99%",
                }}
            // ref={scrollRef}
            >
                <ContainerBlock
                    persistentScrollbar={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                >
                    {planEntrance.map((item, id) => {
                        const isLast = (id === planEntrance.length - 1)
                        return (
                            <EntranceBlock
                                isLast={isLast}
                                entranceData={item}
                                key={id} />
                        )
                    })}
                </ContainerBlock>
            </ScrollIndicator>

        </Container>
    </>
    )
}
export default PlanChessRealtor;