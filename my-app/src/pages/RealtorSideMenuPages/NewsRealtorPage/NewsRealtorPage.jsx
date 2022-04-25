import FONTS from '@/res/fonts'
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PageLocation from '@/components/helpers/pageLocation'

import Pagination from '@/components/Buttons/Pagination/Pagination';
import { useNewsApiStore } from '@/stores/NewsApi';

import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";

// Styles
import { style } from './style'

const {
    Container,
    AdsHeader,
    AdsHeaderText,
    AdsQueryNumber,
    NewsContainer,
    NewsItemBlock,
    NewsItemImageBlock,
    NewsItemImage,
    NewsItemInfo,
    NewsItemTitle,
    NewsItemDate,
} = style;

const NewsRealtorPage = observer(() => {
    const { title } = PageLocation();

    const navigation = useNavigation();

    const { news, setNews } = useNewsApiStore();
    const numberOfNews = news !== undefined && news.length
    const newsApi = toJS(news)
    const isNews = newsApi ? newsApi : []

    useEffect(() => {
        setNews();
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
                        <AdsHeaderText>{title}</AdsHeaderText>
                        <AdsQueryNumber>{numberOfNews} новости</AdsQueryNumber>
                    </AdsHeader>
                    <NewsContainer>
                        {isNews.map((item, id) => <NewsItem data={item} key={id} />)}
                    </NewsContainer>
                </Container>
                <Pagination />

            </ScrollView>
        </View>
    );
})

export default NewsRealtorPage;
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

