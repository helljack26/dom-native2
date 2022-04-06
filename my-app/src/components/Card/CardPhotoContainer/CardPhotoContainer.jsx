import { R } from '../../../res/R'
import FONTS from '../../../res/fonts'
const CameraIcon = R.IMAGES.camera;
const ShowOnMapIcon = R.IMAGES.show_map;
const RouteIcon = R.IMAGES.route;

import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import styled from 'styled-components/native';

// Styles
const Button = styled.TouchableOpacity`
bottom: 16px;
border-radius: 8px;
width: 100%;
font-size: 16px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
padding: 11px 0px;
background-color: rgba(34, 34, 34, 0.7);
margin-top: 23px;
`;
const MapButton = styled.TouchableOpacity`
bottom: 16px;
border-radius: 8px;
width: 48.8%;
font-size: 16px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
padding: 9px 0px;
background-color: rgba(34, 34, 34, 0.7);
margin-top: 23px;
`;
const BtnBlock = styled.View`
width: 100%;
font-size: 16px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: -16px;
`;
const AllPhotoText = styled.Text`
font-family: ${FONTS.medium};
color: white;
font-size: 14px;
margin-left: 10px;
`;
const renderItem = ({ item }) => {
    return (
        <View
            style={{
                marginTop: 15,
                marginLeft: -39,
                width: '100%',
                height: 200,
                borderRadius: 8,
                borderBottomWidth: 2,
                borderBottomColor: R.COLORS.borderGray,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: 'white',
            }}>
            <Image source={item.url} style={{ width: '100%', height: 200 }} />
        </View>
    );
};

export default function CardPhotoContainer({ photoCollection }) {

    return (
        <View>
            <Carousel
                data={photoCollection}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
            />
            <Button>
                <CameraIcon width={19} />
                <AllPhotoText
                >Показать все фото ({photoCollection.length})</AllPhotoText>
            </Button>
            <BtnBlock>
                <MapButton>
                    <ShowOnMapIcon width={18} />
                    <AllPhotoText
                    >На карте</AllPhotoText>
                </MapButton>
                <MapButton>
                    <RouteIcon width={18} />
                    <AllPhotoText
                    >Маршрут</AllPhotoText>
                </MapButton>
            </BtnBlock>
        </View>
    );
};