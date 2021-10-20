import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { LoadingContainer, Container } from './styles';
import api, { key } from '../../services/api';

export default function Search() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([])
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    query: route?.params?.name,
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            })


            if (isActive) {
                setMovie(response.data.results)
                isLoading(false)
            }
        }

        if (isActive) {
            getSearchMovie()
        }

        return () => {
            isActive = false;
        }
    }, [])

    if (loading) {
        return (
            <LoadingContainer>
                <ActivityIndicator color="#FFF" size="large" />
            </LoadingContainer>
        )
    } else return (
        <Container>
            <Text>Search</Text>
        </Container>
    )
}
