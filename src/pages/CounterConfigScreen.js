import React, { useContext, useState } from 'react'

import { Alert } from 'react-native'

import GenericContainerView from '../components/generic-view/GenericView'
import EditConfigView from '../components/edit-counter-view/EditCounterView'
import AddCounterView from '../components/add-counter-view/AddCounterView'
import Text from '../components/text/Text'
import Button from '../components/button/Button'

import {
  CounterConfigView,
  CounterEditView,
  CounterActionView,
  ButtonAuxView,
  ButtonsHeaderView
} from '../components/view/counter-config-view/counterConfigViewStyled'

import { Context } from '../context/index'
import { COUNTER_CONFIG_SCREEN, FONTS, CONTEXT, HEADER, NAVIGATION_SCREEN } from '../utils/Enum'

export default function CounterConfigScreen ({ navigation }) {
  const { theme, counter, tab } = useContext(Context)
  const { state: themeState } = theme
  const { state: counterState, dispatch: counterDispatch } = counter
  const { dispatch: tabDispatch } = tab

  const [addCounter, setAddCounter] = useState(false)

  function renderEditView () {
    return (
      <CounterEditView>
        <Text text={COUNTER_CONFIG_SCREEN.SELECTED_COUNTER} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
        <EditConfigView navigation={navigation} addCounter={addCounter} />
      </CounterEditView>
    )
  }

  function renderAddView () {
    return (
      <CounterEditView>
        <Text text={COUNTER_CONFIG_SCREEN.NEW_COUNTER} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
        <AddCounterView />
      </CounterEditView>
    )
  }

  function removeCounter () {
    counterDispatch({ type: CONTEXT.COUNTER.REMOVE_COUNTER, payload: { index: counterState.selectedCounter } })

    Alert.alert('Contador Removido', '', [
      {
        text: 'Ok',
        onPress: () => goBack()
      }
    ])
  }

  function goBack () {
    setTab()
    navigation.navigate(NAVIGATION_SCREEN.COUNTER_LIST_SCREEN)
  }

  function setTab () {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }

  return (
    <GenericContainerView scroll>
      <CounterConfigView>
        <CounterActionView>
          <Text text={COUNTER_CONFIG_SCREEN.COUNTERS} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
          <ButtonsHeaderView>
            <ButtonAuxView>
              <Button name={addCounter ? COUNTER_CONFIG_SCREEN.EDIT : COUNTER_CONFIG_SCREEN.ADD_COUNTER} onPress={() => setAddCounter(!addCounter)} />
            </ButtonAuxView>
            <ButtonAuxView>
              <Button name={COUNTER_CONFIG_SCREEN.REMOVE_COUNTER} onPress={removeCounter} />
            </ButtonAuxView>
          </ButtonsHeaderView>
        </CounterActionView>
        {addCounter ? renderAddView() : renderEditView()}
      </CounterConfigView>
    </GenericContainerView>
  )
}
