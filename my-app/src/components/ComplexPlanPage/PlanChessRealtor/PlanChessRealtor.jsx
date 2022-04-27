import React from "react";
import { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Image, Text, Pressable, ScrollView } from "react-native";

import COLORS from '@/res/colors'
import { observer } from "mobx-react-lite";

import ScrollIndicator from "react-native-custom-scroll-indicator";
import EntranceBlock from "./EntranceBlock/EntranceBlock";
import ApartmentPopupBlock from './ApartmentPopupBlock/ApartmentPopupBlock'

import { usePopupStore } from '@/stores/popupStore';
// import { wrapScrollView } from 'react-native-scroll-into-view';


// Styles
import { style } from './style'
const {
    Container,
    FloorItems,
    FloorItemsNumber,
    FloorColumn,
    FloorColumnHeader,
    ContainerBlock,
} = style;

const PlanChessRealtor = observer(({ planEntrance }) => {
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

    // Popup store
    const { popupVisible, setPopupVisible, setParentContainerWidth } = usePopupStore();
    const setPopupHide = () => {
        setPopupVisible(false)
    }

    // Set background size for popup
    const [scrollWidth, setScrollWidth] = useState();
    const [scrollHeight, setScrollHeight] = useState();

    const onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;

        setParentContainerWidth(width)

        setScrollWidth(width)
        setScrollHeight(height)
        return
    }



    // const CustomScrollView = wrapScrollView(ScrollView);
    return (<>
        {/* <CustomScrollView> */}
        <Container >

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
                }} >

                <ContainerBlock
                    persistentScrollbar={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    onLayout={onLayout}
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

                    {/* Popup */}
                    {popupVisible === true && <ApartmentPopupBlock
                        // modalVisible={modalVisible}
                        // leftOffset={leftOffset}
                        setPopupHide={setPopupHide}
                        // apartmentData={popupData}
                        scrollWidth={scrollWidth}
                        scrollHeight={scrollHeight}
                    />}
                </ContainerBlock>
            </ScrollIndicator>

        </Container>
        {/* </CustomScrollView> */}
    </>
    )
})
export default PlanChessRealtor;