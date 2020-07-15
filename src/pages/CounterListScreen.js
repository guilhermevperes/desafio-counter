import React, { useContext } from 'react'

import GenericContainerView from '../components/generic-view/GenericView'
import AddCounterView from '../components/add-counter-view/AddCounterView'
import CounterList from '../components/counter-view/CounterList'
import Text from '../components/text/Text'
import VoidStateMessage from '../components/void-state-message/VoidStateMessage'

import { CounterAddAuxView, CounterConfigView } from '../components/view/counter-config-view/counterConfigViewStyled'

import { Context } from '../context/index'

import { COUNTERS_SCREEN, FONTS } from '../utils/Enum'

export default function CounterListScreen ({ navigation }) {
  const { counter, theme } = useContext(Context)
  const { state: counterState } = counter
  const { state: themeState } = theme

  function renderCounterList () {
    return (
      <CounterList navigation={navigation} />
    )
  }

  function renderAddCounterView () {
    return (
      <CounterConfigView>
        <VoidStateMessage />
        <CounterAddAuxView>
          <Text text={COUNTERS_SCREEN.NEW_COUNTER} textColor={themeState.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
          <AddCounterView navigation={navigation} />
        </CounterAddAuxView>
      </CounterConfigView>
    )
  }

  return (
    <GenericContainerView scroll={counterState.counters.length === 0}>
      {counterState.counters.length > 0 ? renderCounterList() : renderAddCounterView()}
    </GenericContainerView>
  )
}
