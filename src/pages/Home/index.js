import React from 'react'
import { ScrollView } from 'react-native'
import { Container, SearchContainer, Input, SearchButton, Title, BannerButton, Banner, SliderMovie } from './styles'
import { Feather } from '@expo/vector-icons'

import theme from '../../styles'
import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem'

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
                    data={[
                        1, 2, 3, 4
                    ]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <Title>Populares</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[
                        1, 2, 3, 4
                    ]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <Title>Mais votados</Title>
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[
                        1, 2, 3, 4
                    ]}
                    renderItem={({ item }) => <SliderItem />}
                />

            </ScrollView>
        </Container>
    )
}
