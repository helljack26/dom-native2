import ICONSIZE from '@/res/sizes'
import COLORS from '@/res/colors'
import IMAGES from '@/res/images'

const { PercentIcon } = IMAGES;

import React from 'react';

import styled from 'styled-components/native';

const Percent = styled.TouchableOpacity`
background-color: white;
width: ${ICONSIZE.buttonLarge}px;
height: ${ICONSIZE.buttonLarge}px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
`
const PercentSmall = styled.TouchableOpacity`
background-color: white;
padding: 5px;
width: ${ICONSIZE.buttonSmall}px;
height: ${ICONSIZE.buttonSmall}px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
`
const PercentButton = ({ isBig }) => {
    return isBig === true
        ? <Percent  >
            <PercentIcon width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </Percent> :
        <PercentSmall>
            <PercentIcon width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </PercentSmall>

}

export default PercentButton;
