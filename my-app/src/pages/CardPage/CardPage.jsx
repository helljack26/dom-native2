import FONTS from '../../res/fonts'
import IMAGES from '../../res/images'
import { StyleSheet, ScrollView, View } from 'react-native';


import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';

import Breadcrumbs from '../../components/Breadcrumbs'

// import CardPhotoContainer from '../../components/Card/CardPhotoContainer'
// import CardDetailsContainer from '../../components/Card/CardDetailsContainer'
// import CardSaveButton from '../../components/Card/CardSaveButton'
// import CardMapContainer from '../../components/Card/CardMapContainer'
// import CardMapContainerMobile from '../../components/Card/CardMapContainerMobile'
// import CardAgentContainer from '../../components/Card/CardAgentContainer'
// import CardSimilarObject from '../../components/Card/CardSimilarObject'

import styled from 'styled-components/native';

const Main = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0px 4%;
width: 92%;
background-color: white;
padding-top: 12px;
`;

import { ApartmentMockApi } from '../../api/mock/ApartmentMockApi.jsx'


export default function CardPage({ route, navigation }) {

    const { itemId, category } = route.params;
    
    const whichCatalog = (catalogName) => {
        switch (catalogName) {
            case 'Квартиры':
                return ApartmentMockApi;
            default:
                break;
        }
    }
    const catalogDefined = whichCatalog(category)
    const cardDetails = catalogDefined.find((item) => item.id === Number(itemId) && item);
    // console.log(cardDetails);
    const { id, name,
        photoLargePath,
        favoriteNumber,
        viewNumber } = cardDetails;

    return (
        <>
            <Header />
            <View >
                {/* <div > */}
                {/* <Breadcrumbs title={title} ads={ads} />
                <Breadcrumbs ads={ads} catalog={title} title={name} /> */}
                {/* Photo */}
                {/* <CardPhotoContainer photoCollection={photoLargePath} />
                    <CardMapContainerMobile />
                    <CardDetailsContainer details={cardDetails} />
                    <CardSaveButton />
                </div>

                <div >
                    <CardMapContainer favoriteNumber={favoriteNumber} viewNumber={viewNumber} />
                    <CardAgentContainer id={id} />
                </div> */}
            </View>
            {/* <CardSimilarObject /> */}

            {/* <Footer /> */}
            {/* <NavbarMobile /> */}
        </>
    )
}
