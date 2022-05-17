import React from "react";
import { useState, useEffect, useRef } from 'react';
import C from '@/res/colors'
import S from '@/res/strings'

import useComponentVisible from '@/components/helpers/useComponentVisible'

import { usePopupStore } from '@/stores/popupStore';

import HELPERS from '@/components/helpers/helpers'
const { spaceInPriceValue } = HELPERS

// Images
import IMAGES from '@/res/images'

const { LockGrayIcon,
    CrossGrayIcon } = IMAGES;

// Styles
import { style } from './style.js'
import { observer } from "mobx-react-lite";
const {
    ApartmentSmallCell,
    ApartmentSmallCellHeader,
    ApartmentSmallCellPrice,
    ApartmentSmallCellCol,
    ApartmentSmallCellDisable,
    ApartmentSmallCellReserved,
    ApartmentSmallCellDisableText,
} = style;

const EntranceBlockItem = observer(({ apartmentData, isOpenPopup, isLast }) => {

    const {
        id,
        isSold,
        propertyArea,
    } = apartmentData;

    const marginRight = isLast ? 0 : 8;

    const [itemXPosition, setItemXPosition] = useState();

    const [coordinate, setCoordinate] = useState([])

    const { setPopupDataStore } = usePopupStore();

    const { ref, isComponentVisible, setIsComponentVisible, setLeftOffset } = useComponentVisible(false);


    // const UIManager = require('NativeModules').UIManager;
    // const handle = React.findNodeHandle(this.refs.ref);

    // UIManager.measureLayoutRelativeToParent(
    //     handle,
    //     (e) => { console.error(e) },
    //     (x, y, w, h) => {
    //         console.log('offset', x, y, w, h);
    //     });
    // TODO остановился на вычислении расстояния относильно ячейки, при скролле берет значение относительно страницы и все что уезжает в лево устанавливает в минус, найти способ как узнать сдвиг относительно родительского контейнера 

    const openPopup = () => {
        // ref.current.scrollTo({ x: coordinate[item.key] - 50 })
        setIsComponentVisible(true)
        console.log('открываю попап');
        setPopupDataStore(apartmentData)

        // setLeftOffset(itemXPosition)
    }

    switch (isSold) {
        case true:
            return (
                <ApartmentSmallCellDisable style={{ marginRight: marginRight, flexDirection: 'column', }}    >
                    <CrossGrayIcon width={14} height={14} />
                </ApartmentSmallCellDisable>)

        case 'reserved':
            return (
                <ApartmentSmallCellReserved style={{ marginRight: marginRight }}     >
                    <LockGrayIcon width={14} height={14} />
                </ApartmentSmallCellReserved>)
        //Available 
        default:
            return (
                <>
                    <ApartmentSmallCell
                        id={id}
                        ref={ref}
                        onPress={() => openPopup()}
                        style={{
                            marginRight: marginRight,
                            borderColor: isComponentVisible === true ? C.mainBlue : C.borderGray
                        }}
                        onLayout={(event) => {
                            const layout = event.nativeEvent.layout;
                            // coordinate[id] = layout.x;
                            // console.log(layout.x);
                        }}
                    // onLayout={(event) => {
                    //     event.target.measure(
                    //         (x, y, width, height, pageX, px) => {
                    //             setItemXPosition(Math.round(px));
                    //         },
                    //     );
                    // }}
                    >
                        <ApartmentSmallCellHeader>
                            {propertyArea}
                            {itemXPosition} {S.squareMeterSymbol}
                        </ApartmentSmallCellHeader>

                    </ApartmentSmallCell>
                </>
            )
    }
})
export default EntranceBlockItem;