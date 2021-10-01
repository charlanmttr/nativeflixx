import React from 'react'
import { Feather } from '@expo/vector-icons'

import theme from '../../styles'

import { Container, MenuButton, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Header({ title }) {
    const navigation = useNavigation();
    return (
        <Container>
            <MenuButton
                onPress={() => navigation.openDrawer()}
            >
                <Feather name='menu' size={34} color={theme.title} />
            </MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}
