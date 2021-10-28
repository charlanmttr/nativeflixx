import styled from 'styled-components/native';
import theme from '../../styles'

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.background};
`;

export const LoadingContainer = styled.View`
    flex: 1;
    background-color: ${theme.background};
    justify-content: center;
    align-items: center;
`;

export const ListMovies = styled.FlatList``;
