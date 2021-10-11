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

export const Title = styled.Text`
    color: ${theme.title};
    font-size: 22px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 25px;
`;

export const ButtonLink = styled.TouchableOpacity`
    background-color: ${theme.firstHighlight};
    width: 63px;
    height: 63px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 25px;
    border-top-left-radius: 25px;
    position: absolute;
    top: 445px;
    right: 13px;
    justify-content: center;
    align-items: center;
`;

export const ContentArea = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
    justify-content: space-between;
    margin-bottom: 3px;
`;

export const Rate = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${theme.text};
`

export const ListGenres = styled.FlatList`
    padding-left: 14px;
    margin: 8px 0;
    max-height: 35px;
    min-width: 35px;
`;

export const Description = styled.Text`
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 30px;
    color: ${theme.text};
    font-size: 16px;
    line-height: 23px;
    text-align: justify;
`;