import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import theme from '../../styles'
import { Container, BannerItem, Title, Rate, RateContainer } from './styles'

export default function SliderItem() {
    return (
        <Container
            activeOpacity={0.8}
        >
            <BannerItem
                source={{ uri: 'https://static.wikia.nocookie.net/dublagem/images/c/ca/La_Casa_de_Papel.jpg/revision/latest?cb=20210906003054&path-prefix=pt-br' }}
            />
            <Title numberOfLines={1}>Vingadores</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color={theme.secondHighlight} />
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}