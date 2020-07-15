import React, { useContext, useState, useEffect } from 'react'
import { BackHandler, Alert } from 'react-native'

import { EditCounterViewContainer, TextAuxView, EditAuxFooterView, EditAuxButtonView } from './editCounterViewStyled'

import Text from '../text/Text'
import Button from '../button/Button'
import Input from '../input/Input'

import { Context } from '../../context/index'

import { FONTS, CONTEXT, COUNTERS_SCREEN, HEADER } from '../../utils/Enum'

export default function EditCounterView ({ navigation, addCounter }) {
  const { theme, counter, tab } = useContext(Context)
  const { state: themeState } = theme
  const { state: counterState, dispatch: counterDispatch } = counter
  const { dispatch: tabDispatch } = tab

  const [counterName, setCounterName] = useState('')
  const [currentValue, setCurrentValue] = useState('')
  const [maxValue, setMaxValue] = useState('')
  const [minValue, setMinValue] = useState('')

  useEffect(() => {
    if (counterState.selectedCounter !== null) {
      setCounterName(counterState.counters[counterState.selectedCounter].name)
      setCurrentValue(counterState.counters[counterState.selectedCounter].currentValue.toString())
      setMaxValue(counterState.counters[counterState.selectedCounter].maxValue.toString())
      setMinValue(counterState.counters[counterState.selectedCounter].minValue.toString())
    }
    BackHandler.addEventListener('hardwareBackPress', backScreen)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress')
    }
  }, [])

  function backScreen () {
    setTab()
    navigation.goBack()
    return true
  }

  function increment () {
    if (parseInt(currentValue) < parseInt(maxValue)) {
      setCurrentValue(parseInt(currentValue) + 1)
    }
  }

  function decrement () {
    if (parseInt(currentValue) > parseInt(minValue)) {
      setCurrentValue(parseInt(currentValue) - 1)
    }
  }

  function save () {
    const currentValueInt = parseInt(currentValue)
    const maxValueInt = parseInt(maxValue)
    const minValueInt = parseInt(minValue)
    let nameExists = false
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

    counterState.counters.forEach(counter => {
      if (counter.name === counterName && counter.index !== counterState.selectedCounter) {
        nameExists = true
      }
    })

    if (nameExists) {
      Alert.alert(COUNTERS_SCREEN.OPS, COUNTERS_SCREEN.NAME_EXISTS)
      return
    }

    counterDispatch({
      type: CONTEXT.COUNTER.UPDATE_COUNTER,
      payload: {
        name: counterName,
        currentValue: currentValueInt,
        maxValue: maxValueInt,
        minValue: minValueInt,
        index: counterState.selectedCounter
      }
    })
    setTab()
    navigation.goBack()
  }

  function reset () {
    setCurrentValue('0')
    setMaxValue('0')
    setMinValue('0')
    counterDispatch({ type: CONTEXT.COUNTER.RESET_COUNTER, payload: { index: counterState.selectedCounter } })
  }

  function setTab () {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }

  return (
    <EditCounterViewContainer borderColor={themeState.secondaryColor}>
      <Input name={COUNTERS_SCREEN.COUNTER_NAME} value={counterName} setValue={setCounterName} maxLength={15} />
      <TextAuxView>
        <Text text={COUNTERS_SCREEN.CURRENT_VALUE} size='20px' textColor={themeState.primaryColor} fontFamily={FONTS.SEMI_BOLD} />
        <Text text={currentValue} size='20px' textColor={themeState.secondaryColor} fontFamily={FONTS.SEMI_BOLD} />
      </TextAuxView>
      <Input name={COUNTERS_SCREEN.MAX_VALUE} value={maxValue} setValue={setMaxValue} keyboardType='numeric' maxLength={3} />
      <Input name={COUNTERS_SCREEN.MIN_VALUE} value={minValue} setValue={setMinValue} keyboardType='numeric' maxLength={3} />
      <EditAuxFooterView>
        <EditAuxButtonView>
          <Button name={COUNTERS_SCREEN.INCREMENT} onPress={increment} />
        </EditAuxButtonView>
        <EditAuxButtonView>
          <Button name={COUNTERS_SCREEN.DECREMENT} onPress={decrement} />
        </EditAuxButtonView>
      </EditAuxFooterView>
      <EditAuxButtonView>
        <Button name={COUNTERS_SCREEN.RESET} onPress={reset} />
      </EditAuxButtonView>
      <EditAuxButtonView>
        <Button name={COUNTERS_SCREEN.SAVE} onPress={save} />
      </EditAuxButtonView>
    </EditCounterViewContainer>
  )
}
