import styled from 'styled-components/native'

export const SafeAreaViewStyled = styled.SafeAreaView`
    flex: 1;
`

export const GenericViewContainer = styled.View`
    flex: 1;
    background-color: ${props => props.backgroundColor};
    width: 100%;
`
