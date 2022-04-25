import COLORS from '@/res/colors'
import IMAGES from '@/res/images'
import ICONSIZE from '@/res/sizes'

const { ShareIcon } = IMAGES;

import React from 'react';

import styled from 'styled-components/native';
const ShareLarge = styled.TouchableOpacity`
background-color: white;
width: ${ICONSIZE.buttonLarge}px;
height: ${ICONSIZE.buttonLarge}px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`
const ShareSmall = styled.TouchableOpacity`
background-color: white;
width: ${ICONSIZE.buttonSmall}px;
height: ${ICONSIZE.buttonSmall}px;
border: 1px solid ${COLORS.mainBlack};
border-radius: 4px;
display: flex;
margin-left: 10px;
align-items: center;
justify-content: center;
`
const ShareButton = ({ isBig }) => {

    return isBig === true ?
        <ShareLarge >
            <ShareIcon width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </ShareLarge>
        :
        <ShareSmall >
            <ShareIcon width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </ShareSmall>
}

export default ShareButton;

