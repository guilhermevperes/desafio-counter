import styled from 'styled-components/native'

export const InputContainer = styled.View`
    height: 40px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const TextInputStyled = styled.TextInput`
    border: 2px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    height: 40px;
    border-radius: 6px;
    flex: 1;
`
