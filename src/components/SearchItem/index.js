import React from 'react'

import { Container, Banner, Title, RateContainer, Rate } from './styles'
import { Ionicons } from '@expo/vector-icons'
import theme from '../../styles'

export default function index({ data, navigate }) {

    const detailMovie = () => {
        navigate(data)
    }

    return (
        <Container
            onPress={() => detailMovie(data)}
        >
            {
                data?.poster_path
                    ? (
                        <Banner
                            resizeMethod="resize"
                            source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
                        />
                    )
                    : (
                        <Banner
                            resizeMethod="resize"
                            source={require('../../assets/img/defaultImage.jpg')}
                        />
                    )
            }

            <Title>{data?.title}</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color={theme.secondHighlight} />
                <Rate>{data?.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}
