import styled from 'styled-components/native'

export const CounterListContainer = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const CounterViewContainer = styled.TouchableOpacity`
    height: 150px;
    width: 90%;
    align-self: center;
    background-color: green;
    border-radius: 10px;
    border: 2px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    margin-bottom: 10px;
    justify-content: center;
`

export const ContentViewEdit = styled.View`
    position: absolute;
    top: 5px;
    right: 5px;
    justify-content: center;
    align-items: center;
`

export const ContentViewHeader = styled.View`
    position: absolute;
    width: 100%;
    justify-content: center;
    align-items: center;
    top: 5px;
`
export const ContentViewBody = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ContentViewFooter = styled.View`
    position: absolute;
    width: 100%;
    justify-content: center;
    align-items: center;
    bottom: 5px;
    flex-direction: row;
    justify-content: space-around;
`

export const ActionButtonsView = styled.View`
    flex-direction: row;
    flex: 0.45;
    justify-content: space-between;
`

export const InfoAuxView = styled.View`
`

export const TouchableOpacityStyled = styled.TouchableOpacity`

`
export const TextAuxView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
