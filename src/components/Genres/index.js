import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    padding: 5px 8px;
    background-color: rgba(255,255,255, 0.7);
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 4px;
`;

const Title = styled.Text`
    color: #000;
    font-size: 16px;
`

export default function Genres({data}) {
    return (
        <Container>
            <Title>{data.name}</Title>
        </Container>
    )
}
