import React from 'react';

import { style } from './style'
// Styles
const {
    PlanFiltersMobile,
    PlanFiltersMobileText,
    PlanFiltersMobileNumber,
    PlanFiltersMobileNumberText,
} = style;

const PlanFilters = () => {
    const filterCounter = 3;

    return (<>
        < PlanFiltersMobile >
            <PlanFiltersMobileText>
                Фильтры
            </PlanFiltersMobileText>

            <PlanFiltersMobileNumber >
                <PlanFiltersMobileNumberText >
                    {filterCounter}
                </PlanFiltersMobileNumberText>
            </PlanFiltersMobileNumber>
        </PlanFiltersMobile >
    </>
    )
}

export default PlanFilters;