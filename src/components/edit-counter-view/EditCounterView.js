import React, { useContext, useState, useEffect } from 'react'
import { BackHandler, Alert } from 'react-native'

import { EditCounterViewContainer, TextAuxView, EditAuxFooterView, EditAuxButtonView } from './editCounterViewStyled'

import Text from '../text/Text'
import Button from '../button/Button'
import Input from '../input/Input'

import { Context } from '../../context/index'

import { FONTS, CONTEXT, COUNTER_CONFIG_SCREEN, NAVIGATION_SCREEN, HEADER } from '../../utils/Enum'

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
      console.log('counterState.selectedCounter :>> ', counterState.selectedCounter)
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
    if (currentValue < maxValue) {
      setCurrentValue(parseInt(currentValue) + 1)
    }
  }

  function decrement () {
    if (currentValue > minValue) {
      setCurrentValue(parseInt(currentValue) - 1)
    }
  }

  function save () {
    const currentValueInt = parseInt(currentValue)
    const maxValueInt = parseInt(maxValue)
    const minValueInt = parseInt(minValue)
    if (maxValueInt < minValueInt) {
      Alert.alert('Ops', 'O valor máximo é menor que o valor mínimo.')
      return
    }

    if (!counterName) {
      Alert.alert('Ops', 'Preencha o nome!')
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

  function setTab () {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }

  return (
    <EditCounterViewContainer borderColor={themeState.secondaryColor}>
      <Input name={COUNTER_CONFIG_SCREEN.COUNTER_NAME} value={counterName} setValue={setCounterName} maxLength={15} />
      <TextAuxView>
        <Text text={COUNTER_CONFIG_SCREEN.CURRENT_VALUE} size='20px' textColor={themeState.primaryColor} fontFamily={FONTS.SEMI_BOLD} />
        <Text text={currentValue} size='20px' textColor={themeState.secondaryColor} fontFamily={FONTS.SEMI_BOLD} />
      </TextAuxView>
      <Input name={COUNTER_CONFIG_SCREEN.MAX_VALUE} value={maxValue} setValue={setMaxValue} keyboardType='numeric' maxLength={3} />
      <Input name={COUNTER_CONFIG_SCREEN.MIN_VALUE} value={minValue} setValue={setMinValue} keyboardType='numeric' maxLength={3} />
      <EditAuxFooterView>
        <EditAuxButtonView>
          <Button name={COUNTER_CONFIG_SCREEN.INCREMENT} onPress={increment} />
        </EditAuxButtonView>
        <EditAuxButtonView>
          <Button name={COUNTER_CONFIG_SCREEN.DECREMENT} onPress={decrement} />
        </EditAuxButtonView>
      </EditAuxFooterView>
      <EditAuxButtonView>
        <Button name={COUNTER_CONFIG_SCREEN.SAVE} onPress={save} />
      </EditAuxButtonView>
    </EditCounterViewContainer>
  )
}
