import IMAGES from '../../../res/images'
import { styles } from './style'
import React from 'react';

import AddToFavoriteButton from '../../AddToFavoriteButton/AddToFavoriteButton'

const ViewIcon = IMAGES.view_icon
const HeartSmallIcon = IMAGES.heart_small_icon
const PercentIcon = IMAGES.percent_icon
const ShareIcon = IMAGES.ShareIcon

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
                    <HeartSmallIcon width='14px' />
                    <FavoriteView_block_text>
                        {favoriteNumber}
                    </FavoriteView_block_text>
                </FavoriteView_block>

                {/* View */}
                <FavoriteView_block>
                    <ViewIcon width='14px' />
                    <FavoriteView_block_text>
                        {viewNumber}
                    </FavoriteView_block_text>
                </FavoriteView_block>
            </FavoriteView>

            {/* Buttons */}
            <Details_mobile>
                <Details_mobile_btn>
                    <PercentIcon width='14px' />
                </Details_mobile_btn>

                <Details_mobile_btn>
                    <ShareIcon width='14px' />
                </Details_mobile_btn>

                <Details_mobile_btn>
                    <AddToFavoriteButton isBig={false} inFavorite={inFavorite} />
                </Details_mobile_btn>
            </Details_mobile>
        </Card_details>
    )
}

export default CardDetailsButtonBar;