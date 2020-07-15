import React, { useContext, useState, useEffect } from 'react'
import { BackHandler, Alert } from 'react-native'

import { EditCounterViewContainer, TextAuxView, EditAuxFooterView, EditAuxButtonView } from './addCounterViewStyled'

import Text from '../text/Text'
import Button from '../button/Button'
import Input from '../input/Input'

import { Context } from '../../context/index'

import { FONTS, CONTEXT, COUNTER_CONFIG_SCREEN, NAVIGATION_SCREEN, HEADER } from '../../utils/Enum'

export default function AddCounterView ({ navigation, addCounter }) {
  const { theme, counter, tab } = useContext(Context)
  const { state: themeState } = theme
  const { state: counterState, dispatch: counterDispatch } = counter
  const { dispatch: tabDispatch } = tab

  const [counterName, setCounterName] = useState('')
  const [maxValue, setMaxValue] = useState('')
  const [minValue, setMinValue] = useState('')

  function save () {

  }

  function setTab () {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }

  return (
    <EditCounterViewContainer borderColor={themeState.secondaryColor}>
      <Input name={COUNTER_CONFIG_SCREEN.COUNTER_NAME} value={counterName} setValue={setCounterName} maxLength={15} />
      <Input name={COUNTER_CONFIG_SCREEN.MAX_VALUE} value={maxValue} setValue={setMaxValue} keyboardType='numeric' maxLength={3} />
      <Input name={COUNTER_CONFIG_SCREEN.MIN_VALUE} value={minValue} setValue={setMinValue} keyboardType='numeric' maxLength={3} />
      <EditAuxButtonView>
        <Button name={COUNTER_CONFIG_SCREEN.SAVE} onPress={save} />
      </EditAuxButtonView>
    </EditCounterViewContainer>
  )
}
