import React from 'react'
import styled from 'styled-components/native'
import theme from '../../styles'

const Container = styled.View`
    padding: 8px 14px;
`

const Text = styled.Text`
    background-color: ${theme.firstHighlight};
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    color: ${theme.title};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export default function EmptyFavoriteList() {
    return (
        <Container>
            <Text>Opsss, sua lista está vazia :c</Text>
        </Container>
    )
}
