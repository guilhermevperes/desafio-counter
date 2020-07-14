import styled from 'styled-components/native'

export const SafeAreaViewStyled = styled.SafeAreaView`
    flex: 1;
`

export const GenericViewContainer = styled.View`
    flex: 1;
    background-color: ${props => props.backgroundColor};
    width: 100%;
`

export const Content = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    margin-top: 80px;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`
