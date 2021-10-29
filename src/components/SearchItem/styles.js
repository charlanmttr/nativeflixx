import styled from 'styled-components';
import theme from '../../styles'

export const Container = styled.TouchableOpacity`
    padding: 8px 0;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 180px;
    margin-bottom: 4px;
`;

export const Rate = styled.Text`
    color: ${theme.text};
    font-size: 16px;
    padding: 4px 8px;
`;

export const Title = styled.Text`
    color: ${theme.title};
    font-size: 20px;
    font-weight: bold;
    padding: 0 8px;
`;
export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
`;
