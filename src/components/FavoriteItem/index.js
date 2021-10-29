import React from 'react'
import { Container, Title, RateContainer, Rate, ActionContainer, DetailButton, DeleteButton } from './styles'
import themes from '../../styles'

import { Ionicons, Feather } from '@expo/vector-icons'

export default function FavoriteItem({ data, deleteMovie, navigatePage }) {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={15} color={themes.secondHighlight} />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton
                    onPress={() => navigatePage(data)}
                >
                    <Title size={14}>Ver Detalhes</Title>
                </DetailButton>

                <DeleteButton
                    onPress={() => deleteMovie(data.id)}
                >
                    <Feather name="trash" size={24} color={"#FFF"} />
                </DeleteButton>
            </ActionContainer>
        </Container>
    )
}
