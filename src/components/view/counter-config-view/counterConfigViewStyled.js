import styled from 'styled-components/native'

export const CounterConfigView = styled.View`
    flex: 1;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`

export const CounterActionView = styled.View`
    width: 100%;
    align-items: flex-start;
    height: 100px;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const CounterEditAuxView = styled.View`
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`
export const CounterAddAuxView = styled(CounterEditAuxView)`
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`

export const ButtonAuxView = styled.View`
    flex: 0.45;
    justify-content: center;
    align-items: center;
`

export const ButtonsHeaderView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    justify-content: space-around;
`
