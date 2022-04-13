import React from 'react';

import ShareButton from '@/components/ShareButton/ShareButton';
import AddToFavoriteButton from '@/components/AddToFavoriteButton/AddToFavoriteButton'

import IMAGES from '@/res/images'
const { ViewIcon,
    HeartSmallIcon,
} = IMAGES;

import { styles } from './style'
const {
    Card_details,
    FavoriteView,
    FavoriteView_block,
    Details_mobile,
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
                <ShareButton isBig={true} />
                <AddToFavoriteButton isBig={true} inFavorite={inFavorite} />
            </Details_mobile>
        </Card_details>
    )
}

export default CardDetailsButtonBar;