import styled from 'styled-components'
import theme from '../../styles'

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.background};
`;

export const Header = styled.View`
    z-index: 99; /* header ficará sempre acima dos demais itens, no caso uma imagem */
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25,26,48,0.8);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`

export const Banner = styled.Image`
    width: 100%;
    height: 480px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;