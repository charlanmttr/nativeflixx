import styled from 'styled-components/native'

import theme from '../../styles'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${theme.background};
    padding: 4px 0;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 45px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: rgba(255,255,255, 0.4);
    width: 85%;
    height: 45px;
    border-radius: 6px;
    padding: 8px 15px;
    font-size: 18px;
    color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    padding-top: 17px;
    padding-bottom: 8px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 21px;
    font-weight: bold;
    color: ${theme.title};
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
    height: 150px;
    border-radius: 6px;
    margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
    height: 250px;
    padding: 0 14px;
`;