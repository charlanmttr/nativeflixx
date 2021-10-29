import React, { useEffect, useState } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import Header from '../../components/Header'
import FavoriteItem from '../../components/FavoriteItem'
import EmptyFavoriteList from '../../components/EmptyFavoriteList'
import { getMoviesSave, removeMovie } from '../../utils/storage'
import { Container, ListMovies } from './styles'

export default function Movies() {
    const navigation = useNavigation();
    const isFocused = useIsFocused()
    const [savedMovies, setSavedMovies] = useState([])

    useEffect(() => {
        let isActive = true;

        async function getSavedMovies() {
            const movies = await getMoviesSave('@nativeflix.mymovies');

            if (isActive) {
                setSavedMovies(movies)
            }
        };

        if (isActive) {
            getSavedMovies();
        }

        return () => {
            isActive = false;
        }
    }, [isFocused])

    const handleDelete = async (id) => {
        const result = await removeMovie('@nativeflix.mymovies', id)
        setSavedMovies(result)
    }

    const navigateDetails = (item) => {
        navigation.navigate('Detail', { id: item.id })
    }

    return (
        <Container>
            <Header title="Meus filmes" />
            <ListMovies
                data={savedMovies}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <FavoriteItem data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigateDetails(item)}
                    />)}
                ListEmptyComponent={() => <EmptyFavoriteList />}
            />
        </Container>
    )
}
