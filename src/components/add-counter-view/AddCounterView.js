import React, { useContext, useState } from 'react'
import { Alert } from 'react-native'

import { EditCounterViewContainer, EditAuxButtonView } from './addCounterViewStyled'

import Button from '../button/Button'
import Input from '../input/Input'

import { Context } from '../../context/index'

import { CONTEXT, COUNTERS_SCREEN, HEADER } from '../../utils/Enum'

export default function AddCounterView ({ navigation, addCounter }) {
  const { theme, counter, tab } = useContext(Context)
  const { state: themeState } = theme
  const { dispatch: counterDispatch } = counter
  const { dispatch: tabDispatch } = tab

  const [counterName, setCounterName] = useState('')
  const [maxValue, setMaxValue] = useState('')
  const [minValue, setMinValue] = useState('')

  function save () {
    const maxValueInt = parseInt(maxValue)
    const minValueInt = parseInt(minValue)

    if (maxValueInt < minValueInt) {
      Alert.alert(COUNTERS_SCREEN.OPS, COUNTERS_SCREEN.ALERT_MAX_MIN)
      return
    }

    if (!counterName) {
      Alert.alert(COUNTERS_SCREEN.OPS, COUNTERS_SCREEN.ALERT_FILL_NAME)
      return
    }

    if (minValue === '' || maxValue === '') {
      Alert.alert(COUNTERS_SCREEN.OPS, COUNTERS_SCREEN.ALERT_FILL_MAX_MIN)
      return
    }

    counterDispatch({
      type: CONTEXT.COUNTER.ADD_COUNTER,
      payload: {
        minValue: minValueInt,
        maxValue: maxValueInt,
        name: counterName
      }
    })

    setTab()
  }

  function setTab () {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }

  return (
    <EditCounterViewContainer borderColor={themeState.secondaryColor}>
      <Input name={COUNTERS_SCREEN.COUNTER_NAME} value={counterName} setValue={setCounterName} maxLength={15} />
      <Input name={COUNTERS_SCREEN.MAX_VALUE} value={maxValue} setValue={setMaxValue} keyboardType='numeric' maxLength={3} />
      <Input name={COUNTERS_SCREEN.MIN_VALUE} value={minValue} setValue={setMinValue} keyboardType='numeric' maxLength={3} />
      <EditAuxButtonView>
        <Button name={COUNTERS_SCREEN.SAVE} onPress={save} />
      </EditAuxButtonView>
    </EditCounterViewContainer>
  )
}
