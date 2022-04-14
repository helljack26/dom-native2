import React from "react";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import newsStore from "stores/newsApi";

import { observer } from "mobx-react";
import { toJS } from "mobx";

// Styles
import { style } from './style'
const {
    Container,
    AdsHeader,
    AdsHeaderText,
    NewsCotainer,
    NewsItemBlock,
    NewsItemImageBlock,
    NewsItemImage,
    NewsItemInfo,
    NewsItemTitle,
    NewsItemDate,
} = style;

const NewsCardSimilar = observer(() => {
    const location = useLocation();
    const splitedRoute = location.pathname.split('/')
    let route = '#/'
    if (splitedRoute[1] === 'realtor') {
        route = '#/realtor/'
    }
    const newsApi = toJS(newsStore.similarNews)
    const isNews = newsApi ? newsApi : []

    useEffect(() => {
        newsStore.getSimilarNews();
    }, []);

    const NewsItem = ({ data }) => {
        const { id, name, creationDate, photoPath } = data;
        return <NewsItemBlock as='a'
            href={`${route}news/${id}`} >
            <NewsItemImageBlock>
                <NewsItemImage src={photoPath} />
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
        <>
            <Container>
                <AdsHeader>
                    <AdsHeaderText>Похожие новости</AdsHeaderText>
                </AdsHeader>
                <NewsCotainer>
                    {isNews.map((item, id) => <NewsItem data={item} key={id} />)}
                </NewsCotainer>
            </Container>
        </>
    )
})

export default NewsCardSimilar;