import React, { useContext, useState } from 'react'

import { Alert } from 'react-native'

import GenericContainerView from '../components/generic-view/GenericView'
import EditConfigView from '../components/edit-counter-view/EditCounterView'
import AddCounterView from '../components/add-counter-view/AddCounterView'
import Text from '../components/text/Text'
import Button from '../components/button/Button'

import {
  CounterConfigView,
  CounterEditAuxView,
  CounterActionView,
  ButtonAuxView,
  ButtonsHeaderView,
  CounterAddAuxView
} from '../components/view/counter-config-view/counterConfigViewStyled'

import { Context } from '../context/index'
import { COUNTERS_SCREEN, FONTS, CONTEXT, HEADER, NAVIGATION_SCREEN } from '../utils/Enum'

export default function CounterConfigScreen ({ navigation }) {
  const { theme, counter, tab } = useContext(Context)
  const { state: themeState } = theme
  const { state: counterState, dispatch: counterDispatch } = counter
  const { dispatch: tabDispatch } = tab

  const [addCounter, setAddCounter] = useState(false)

  function renderEditView () {
    return (
      <CounterEditAuxView>
        <Text text={COUNTERS_SCREEN.SELECTED_COUNTER} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
        <EditConfigView navigation={navigation} addCounter={addCounter} />
      </CounterEditAuxView>
    )
  }

  function renderAddView () {
    return (
      <CounterAddAuxView>
        <Text text={COUNTERS_SCREEN.NEW_COUNTER} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
        <AddCounterView navigation={navigation} />
      </CounterAddAuxView>
    )
  }

  function removeCounter () {
    if (counterState.counters.length > 0) {
      counterDispatch({ type: CONTEXT.COUNTER.REMOVE_COUNTER, payload: { index: counterState.selectedCounter } })

      Alert.alert(COUNTERS_SCREEN.COUNTER_REMOVED, '', [
        {
          text: COUNTERS_SCREEN.OK,
          onPress: () => goBack()
        }
      ])
    }
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
          <Text text={COUNTERS_SCREEN.COUNTERS} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
          <ButtonsHeaderView>
            <ButtonAuxView>
              <Button name={counterState.counters.length === 0 ? COUNTERS_SCREEN.ADD_COUNTER : addCounter ? COUNTERS_SCREEN.EDIT : COUNTERS_SCREEN.ADD_COUNTER} onPress={() => setAddCounter(!addCounter)} />
            </ButtonAuxView>
            <ButtonAuxView>
              <Button name={COUNTERS_SCREEN.REMOVE_COUNTER} onPress={removeCounter} />
            </ButtonAuxView>
          </ButtonsHeaderView>
        </CounterActionView>
        {counterState.counters.length === 0 ? renderAddView() : addCounter ? renderAddView() : renderEditView()}
      </CounterConfigView>
    </GenericContainerView>
  )
}
