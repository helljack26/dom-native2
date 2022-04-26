import React from "react";

// import useComponentVisible from '@/components/helpers/useComponentVisible'

import { spaceInPriceValue } from '@/components/helpers/spaceInPriceValue'

// import ApartmentPopupBlock from '../ApartmentPopupBlock/ApartmentPopupBlock'

// Images
import IMAGES from '@/res/images'

const { LockGrayIcon } = IMAGES;

// Styles
import { style } from './style.js'
const {
    ApartmentSmallCell,
    ApartmentSmallCellHeader,
    ApartmentSmallCellPrice,
    ApartmentSmallCellCol,
    ApartmentSmallCellDisable,
    ApartmentSmallCellReserved,
    ApartmentSmallCellDisableText,
} = style;

const EntranceBlockItem = ({ apartmentData, isOpenPopup, isLast }) => {
    const {
        id,
        isSold,
        roomCount,
        price,
    } = apartmentData;

    // const { ref, isComponentVisible, setIsComponentVisible, leftOffset } = useComponentVisible(isOpenPopup);

    const ApartmentSmallCellName = typeof (roomCount) !== 'number' ? roomCount : `${roomCount} кв`
    const spacedPrice = spaceInPriceValue(price)
    // Border for small cell
    // const activeBorder = isComponentVisible ? '1.5px solid #0072db' : '1.5px solid #e6ecf5'
    const marginRight = isLast ? 0 : 8
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
            return (<>
                <ApartmentSmallCell
                    id={id}
                    // ref={ref}
                    // onClick={setIsComponentVisible}
                    style={{ marginRight: marginRight }}

                // style={{ border: `${activeBorder}` }} 
                >
                    <ApartmentSmallCellHeader>
                        {ApartmentSmallCellName}
                    </ApartmentSmallCellHeader>
                    <ApartmentSmallCellPrice>
                        {spacedPrice} $
                    </ApartmentSmallCellPrice>
                </ApartmentSmallCell>
                {/* Modal */}
                {/* {isComponentVisible &&
                    <ApartmentPopupBlock
                        leftOffset={leftOffset}
                        apartmentData={apartmentData}
                    />} */}
            </>)
    }
}
export default EntranceBlockItem;