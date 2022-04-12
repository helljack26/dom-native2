
import IMAGES from '@/res/images'
const { PercentIcon } = IMAGES;

import React from 'react';

import styled from 'styled-components/native';
import COLORS from '@/res/colors'

const Percent = styled.TouchableOpacity`
background-color: white;
width: 42px;
height: 42px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
padding: 8px;
align-items: center;
justify-content: center;
`
const PercentSmall = styled.TouchableOpacity`
background-color: white;
padding: 5px;
width: 32px;
height: 32px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
`
const PercentButton = ({ isBig }) => {
    return isBig === true
        ? <Percent  >
            <PercentIcon
            />
        </Percent> : <PercentSmall  >
            <PercentIcon
            />
        </PercentSmall>

}

export default PercentButton;
