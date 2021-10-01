import React from 'react'
import { Container, SearchContainer, Input, SearchButton } from './styles'
import { Feather } from '@expo/vector-icons'

import theme from '../../styles'
import Header from '../../components/Header'

export default function Home() {
    return (
        <Container>
            <Header title={'NativeFlix'} />
            <SearchContainer>
                <Input 
                    placeholder="Digite o titulo desejado"
                    placeHolderTextColor={theme.text}
                />
                <SearchButton>
                    <Feather name="search" size={30} color={theme.title} />
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}
