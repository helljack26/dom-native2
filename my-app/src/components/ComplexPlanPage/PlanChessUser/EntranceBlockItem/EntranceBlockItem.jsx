import React from "react";

import useComponentVisible from 'components/helpers/useComponentVisible'

import { spaceInPriceValue } from 'components/helpers/spaceInPriceValue'

import ApartmentPopupBlock from '../ApartmentPopupBlock/ApartmentPopupBlock'

// Images
import IMAGES from 'res/images'

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

const EntranceBlockItem = ({ apartmentData, isOpenPopup }) => {
    const {
        id,
        isSold,
        roomCount,
        price,
    } = apartmentData;

    const { ref, isComponentVisible, setIsComponentVisible, leftOffset } = useComponentVisible(isOpenPopup);

    const ApartmentSmallCellName = typeof (roomCount) !== 'number' ? roomCount : `${roomCount} кв`
    const spacedPrice = spaceInPriceValue(price)
    // Border for small cell
    const activeBorder = isComponentVisible ? '1.5px solid #0072db' : '1.5px solid #e6ecf5'
    switch (isSold) {
        case true:
            return (<ApartmentSmallCellDisable>
                <ApartmentSmallCellDisableText>
                    Квартира <br /> продана
                </ApartmentSmallCellDisableText>
            </ApartmentSmallCellDisable>)

        case 'reserved':
            return (<ApartmentSmallCellReserved>
                <ApartmentSmallCellCol>
                    <ApartmentSmallCellHeader style={{ filter: 'brightness(1.5)' }}>
                        {ApartmentSmallCellName}
                    </ApartmentSmallCellHeader>
                    <ApartmentSmallCellDisableText>
                        Резерв
                    </ApartmentSmallCellDisableText>
                </ApartmentSmallCellCol>
                <ApartmentSmallCellCol>
                    <img src={IMAGES.LockGrayIcon} alt="Lock icon" />
                </ApartmentSmallCellCol>
            </ApartmentSmallCellReserved>)
        //Available 
        default:
            return (<>
                <ApartmentSmallCell
                    id={id}
                    ref={ref}
                    onClick={setIsComponentVisible}
                    style={{ border: `${activeBorder}` }} >
                    <ApartmentSmallCellHeader>
                        {ApartmentSmallCellName}
                    </ApartmentSmallCellHeader>
                    <ApartmentSmallCellPrice>
                        {spacedPrice} $
                    </ApartmentSmallCellPrice>
                </ApartmentSmallCell>
                {/* Modal */}
                {isComponentVisible &&
                    <ApartmentPopupBlock
                        leftOffset={leftOffset}
                        apartmentData={apartmentData}
                    />}
            </>)
    }
}
export default EntranceBlockItem;