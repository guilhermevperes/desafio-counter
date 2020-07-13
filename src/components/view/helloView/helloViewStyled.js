import styled from 'styled-components/native'

export const HelloView = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.backgroundColor}
`
