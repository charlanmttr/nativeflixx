import styled from 'styled-components/native';
import themes from '../../styles'

export const Container = styled.View`
    padding: 14px;
`;

export const Title = styled.Text`
    color: ${themes.title};
    font-size: ${props => props.size}px;
    font-weight: bold;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
`;

export const Rate = styled.Text`
    color: ${themes.text};
    font-size: 14px;
    padding-left: 8px;
`;

export const ActionContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
    width: 85%;
    height: 30px;
    background-color: ${themes.firstHighlight};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const DeleteButton = styled.TouchableOpacity`
    width: 15%;
    height: 30px;
    justify-content: center;
    align-items: center;
`;