import styled from 'styled-components/native'

export const TextStyled = styled.Text`
    color: ${props => props.textColor};
    font-size: ${props => props.size};
    font-family: ${props => props.fontFamily};
`
