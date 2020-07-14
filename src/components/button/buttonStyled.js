import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${props => props.backgroundColor};
    border-radius: 6px;
`
