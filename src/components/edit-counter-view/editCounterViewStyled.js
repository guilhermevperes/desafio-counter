import styled from 'styled-components/native'

export const EditCounterViewContainer = styled.View`
    width: 100%;
    border: 2px dashed ${props => props.borderColor};
    height: 300px;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-around;
`

export const TextAuxView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const EditAuxFooterView = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`

export const EditAuxButtonView = styled.View`
    flex: 0.45;
    align-items: center;
    justify-content: center;
    height: 40px;
`
