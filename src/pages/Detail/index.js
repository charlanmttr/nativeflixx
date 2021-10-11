import React, { useState, useEffect } from 'react'
import { Container, Header, HeaderButton, Banner, ButtonLink, Title, ContentArea, Rate, ListGenres, Description, CloseButton, ModalHeader, ModalTitle } from './styles'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Stars from 'react-native-stars'

import { WebView } from 'react-native-webview'

import theme from '../../styles'
import api, { key } from '../../services/api'
import Genres from '../../components/Genres'
import { Modal, ScrollView } from 'react-native'

export default function Detail({ id }) {
    const navigation = useNavigation()
    const route = useRoute()

    const [movie, setMovie] = useState({})
    const [visible, isVisible] = useState(false)

    useEffect(() => {
        let isActive = true

        async function getMovie() {
            const response = await api.get(`movie/${route.params?.id}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR'
                }
            })
                .catch(err => alert('Opsss, deu erro. Retorno: ' + err.message))

            if (isActive) {
                setMovie(response.data)
            }
        }

        if (isActive) {
            getMovie()
        }

        return () => {
            isActive = false
        }
    }, [])

    return (
        <Container>
            <Header>
                <HeaderButton onPress={() => navigation.goBack()}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
                <HeaderButton>
                    <Ionicons
                        name="bookmark"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
            </Header>
            <ScrollView showsHorizontalScrollIndicator={false}>

                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                />

                <ButtonLink
                    onPress={() => isVisible(true)}
                >
                    <Feather name="link" size={24} color="#FFF" />
                </ButtonLink>

                <Title numberOfLines={1}>{movie.title}</Title>
                <ContentArea>
                    <Stars
                        default={movie.vote_average} count={10}
                        half={true} size={20}
                        fullStar={<Ionicons name="md-star" size={24} color={theme.secondHighlight} />}
                        emptyStar={<Ionicons name="md-star-outline" size={24} color={theme.secondHighlight} />}
                        halfStar={<Ionicons name="md-star-half" size={24} color={theme.secondHighlight} />}
                        disable={true}
                    />
                    <Rate>{movie.vote_average}</Rate>
                </ContentArea>

                <ListGenres
                    data={movie?.genres}
                    horizontal={true}
                    showHorizontalScrollsIndicator={false}
                    keyExtractor={item => String(item.id)}
                    renderItem={(item) => <Genres data={item.item} />}
                />

                <Title>Descrição</Title>
                <Description>
                    {movie.overview}
                </Description>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <>
                    <ModalHeader>
                        <CloseButton onPress={() => isVisible(false)}>
                            <Feather name="x" size={22} color="#FFF" />
                        </CloseButton>
                        <ModalTitle
                            numberOfLines={1}
                        >{movie?.title}</ModalTitle>
                    </ModalHeader>
                    <WebView
                        source={{ uri: movie?.homepage }}
                    />
                </>
            </Modal>
        </Container>
    )
}
