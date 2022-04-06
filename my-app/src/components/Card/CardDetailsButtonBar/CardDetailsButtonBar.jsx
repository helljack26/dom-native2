import IMAGES from '../../../res/images'
import { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native';
import { styles } from './style'
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


const CardDetailsButtonBar = ({ id, inFavorite, favoriteNumber, viewNumber }) => {

    return (
        <Card_details>
            <FavoriteView>
                <FavoriteView_block>
                    <HeartSmallIcon width='14px' />
                    <FavoriteView_block_text>
                        {favoriteNumber}
                    </FavoriteView_block_text>
                </FavoriteView_block>

                <FavoriteView_block>
                    <ViewIcon width='14px' />
                    <FavoriteView_block_text>
                        {viewNumber}
                    </FavoriteView_block_text>
                </FavoriteView_block>
            </FavoriteView>
            <Details_mobile>
                <Details_mobile_btn>
                    <PercentIcon width='14px' />
                </Details_mobile_btn>
                <Details_mobile_btn>
                    <ShareIcon width='14px' />
                </Details_mobile_btn>
                <Details_mobile_btn>
                    <AddToFavoriteButton isBig={true} inFavorite={inFavorite} />
                </Details_mobile_btn>
            </Details_mobile>
        </Card_details>

    )
}

export default CardDetailsButtonBar;