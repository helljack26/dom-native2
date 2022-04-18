import FONTS from '@/res/fonts'
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useNewsApiStore } from '@/stores/NewsApi';

import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";

// Styles
import { style } from './style'

const {
    Container,
    AdsHeader,
    AdsHeaderText,
    NewsContainer,
    NewsItemBlock,
    NewsItemImageBlock,
    NewsItemImage,
    NewsItemInfo,
    NewsItemTitle,
    NewsItemDate,
} = style;

const NewsUserPage = observer(() => {
    const navigation = useNavigation();

    const { similarNews, getSimilarNews } = useNewsApiStore();
    const newsApi = toJS(similarNews)
    const isNews = newsApi ? newsApi : []

    useEffect(() => {
        getSimilarNews();
    }, []);

    const NewsItem = ({ data }) => {
        const { id, name, creationDate, photoPath } = data;
        return <NewsItemBlock onPress={() => {
            navigation.navigate('NewsCardRealtor', {
                itemId: id,
            })
        }} >
            <NewsItemImageBlock>
                <NewsItemImage
                    resizeMode={'contain'}
                    source={photoPath} />
            </NewsItemImageBlock>
            <NewsItemInfo>
                <NewsItemTitle>
                    {name}
                </NewsItemTitle>
                <NewsItemDate>
                    {creationDate}
                </NewsItemDate>
            </NewsItemInfo>
        </NewsItemBlock>
    }
    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <Container>
                    {/* TODO  в обсервер прикинуть как можно получать в компоненте число объектов в тайтл */}
                    <AdsHeader>
                        <AdsHeaderText>Похожие новости</AdsHeaderText>
                    </AdsHeader>
                    <NewsContainer>
                        {isNews.map((item, id) => <NewsItem data={item} key={id} />)}
                    </NewsContainer>
                </Container>

            </ScrollView>
        </View>
    );
})

export default NewsUserPage;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: FONTS.regular,
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: FONTS.regular,
    },
})

