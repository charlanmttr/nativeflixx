import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import theme from '../../styles'
import { Container, BannerItem, Title, Rate, RateContainer } from './styles'

export default function SliderItem({ data, navigateDetailsPage }) {
    return (
        <Container
            activeOpacity={0.8}
            onPress={() => navigateDetailsPage(data)}
        >
            <BannerItem
                source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
            />
            <Title numberOfLines={1}>{data.title}</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color={theme.secondHighlight} />
                <Rate>{data.vote_average}</Rate>
            </RateContainer>
        </Container>
    )
}