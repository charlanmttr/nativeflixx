import styled from "styled-components";

import theme from '../../styles'

export const Container = styled.View`
    height: 70px;  
    flex-direction: row;
    align-items: center;
    padding-left: 14px;
`;

export const MenuButton = styled.TouchableOpacity`
    height: 70px;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    color: ${theme.title};
    font-size: 25px;
    font-weight: bold;
    margin-left: 14px;
`;