import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor};
    border-radius: 6px;
`
