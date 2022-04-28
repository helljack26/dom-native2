import React from "react";
import { useState, useEffect, useRef } from 'react';
import COLORS from '@/res/colors'

import useComponentVisible from '@/components/helpers/useComponentVisible'

import { usePopupStore } from '@/stores/popupStore';

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

// Images
import IMAGES from '@/res/images'

const { LockGrayIcon } = IMAGES;

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
        roomCount,
        price,
    } = apartmentData;

    const ApartmentSmallCellName = typeof (roomCount) !== 'number' ? roomCount : `${roomCount} кв`
    const spacedPrice = spaceInPriceValue(price)
    const marginRight = isLast ? 0 : 8;

    const [itemXPosition, setItemXPosition] = useState();

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
        setIsComponentVisible(true)
        setPopupDataStore(apartmentData)
        console.log('из копонента', itemXPosition);
        setLeftOffset(itemXPosition)
    }

    switch (isSold) {
        case true:
            return (<ApartmentSmallCellDisable
                style={{
                    marginRight: marginRight,
                    flexDirection: 'column',
                }}
            >
                <ApartmentSmallCellDisableText>
                    Квартира
                </ApartmentSmallCellDisableText>
                <ApartmentSmallCellDisableText>
                    продана
                </ApartmentSmallCellDisableText>
            </ApartmentSmallCellDisable>)

        case 'reserved':
            return (<ApartmentSmallCellReserved
                style={{ marginRight: marginRight }}
            >
                <ApartmentSmallCellCol>
                    <ApartmentSmallCellHeader
                        style={{ color: '#a6a6a6' }}
                    >
                        {ApartmentSmallCellName}
                    </ApartmentSmallCellHeader>
                    <ApartmentSmallCellDisableText
                        style={{ color: '#a6a6a6' }}
                    >
                        Резерв
                    </ApartmentSmallCellDisableText>
                </ApartmentSmallCellCol>
                <ApartmentSmallCellCol>
                    <LockGrayIcon />
                </ApartmentSmallCellCol>
            </ApartmentSmallCellReserved>)
        //Available 
        default:
            return (
                <>
                    <ApartmentSmallCell
                        id={id}
                        // ref={ref}
                        ref={ref}
                        onPress={() => openPopup()}
                        style={{
                            marginRight: marginRight,
                            borderColor: isComponentVisible === true ? COLORS.mainBlue : COLORS.borderGray
                        }}
                    // onLayout={(event) => {
                    //     event.target.measure(
                    //         (x, y, width, height, pageX, px) => {
                    //             setItemXPosition(Math.round(px));
                    //         },
                    //     );
                    // }}
                    // onLayout={(event) => {
                    //     event.target.measure(
                    //         (x, y, width, height, pageX, pageY) => setItemXPosition(x));
                    // }}
                    >
                        <ApartmentSmallCellHeader>

                            {/* {ApartmentSmallCellName} */}
                            {itemXPosition}
                        </ApartmentSmallCellHeader>
                        <ApartmentSmallCellPrice>
                            {spacedPrice} $
                        </ApartmentSmallCellPrice>
                    </ApartmentSmallCell>
                </>
            )
    }
})
export default EntranceBlockItem;