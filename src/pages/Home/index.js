import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { Container, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderMovie } from './styles'
import { Feather } from '@expo/vector-icons'

import theme from '../../styles'
import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem'

import api, { key } from '../../services/api'
import { getListMovies } from '../../utils/movies'

export default function Home() {
    const [nowMovies, setNowMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isActive = true;

        async function getMovies() {
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),
                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),
                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),
            ])

            const nowList = getListMovies(10, nowData.data.results)
            const popularList = getListMovies(8, popularData.data.results)
            const topList = getListMovies(8, topData.data.results)

            setNowMovies(nowList)
            setPopularMovies(popularList)
            setTopRatedMovies(topList)

            setLoading(false)
        }

        getMovies()
    }, [])

    if (loading) {
        return (
            <Container>
                <ActivityIndicator size="large" color="#FFF" />
            </Container>
        )
    } else {
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Title>Em cartaz</Title>
                    <BannerButton
                        activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Banner
                            resizeMethod="resize"
                            source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg' }}
                        />
                    </BannerButton>
                    <SliderMovie
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={nowMovies}
                        renderItem={({ item }) => <SliderItem data={item} />}
                        keyExtractor={(item) => String(item.id)}
                    />

                    <Title>Populares</Title>
                    <SliderMovie
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={popularMovies}
                        renderItem={({ item }) => <SliderItem data={item} />}
                        keyExtractor={(item) => String(item.id)}
                    />

                    <Title>Mais votados</Title>
                    <SliderMovie
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={topRatedMovies}
                        renderItem={({ item }) => <SliderItem data={item} />}
                        keyExtractor={(item) => String(item.id)}
                    />

                </ScrollView>
            </Container>
        )
    }
}
