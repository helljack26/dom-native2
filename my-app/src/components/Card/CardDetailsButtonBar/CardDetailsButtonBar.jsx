import React from 'react';

import AddToFavoriteButton from '../../AddToFavoriteButton/AddToFavoriteButton'

import IMAGES from '../../../res/images'
const { ViewIcon,
    HeartSmallIcon,
    PercentIcon,
    ShareIcon } = IMAGES;

import { styles } from './style'
const {
    Card_details,
    FavoriteView,
    FavoriteView_block,
    Details_mobile,
    Details_mobile_btn,
    FavoriteView_block_text,
} = styles;

const CardDetailsButtonBar = ({ inFavorite, favoriteNumber, viewNumber }) => {

    return (
        <Card_details>
            <FavoriteView>

                {/* Favorite */}
                <FavoriteView_block>
                    <HeartSmallIcon width={12} />
                    <FavoriteView_block_text>
                        {favoriteNumber}
                    </FavoriteView_block_text>
                </FavoriteView_block>

                {/* View */}
                <FavoriteView_block>
                    <ViewIcon />
                    <FavoriteView_block_text>
                        {viewNumber}
                    </FavoriteView_block_text>
                </FavoriteView_block>
            </FavoriteView>

            {/* Buttons */}
            <Details_mobile>
                <Details_mobile_btn>
                    <PercentIcon width={14} />
                </Details_mobile_btn>

                <Details_mobile_btn>
                    <ShareIcon width={15} />
                </Details_mobile_btn>

                <Details_mobile_btn>
                    <AddToFavoriteButton isBig={false} inFavorite={inFavorite} />
                </Details_mobile_btn>
            </Details_mobile>
        </Card_details>
    )
}

export default CardDetailsButtonBar;