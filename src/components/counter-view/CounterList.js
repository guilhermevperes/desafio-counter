import React, { useContext, useState, useEffect } from 'react'

import { FlatList } from 'react-native'

import CounterView from './CounterView'

import { CounterListContainer } from './counterViewStyled'

import { Context } from '../../context/index'

import { CONTEXT, NAVIGATION_SCREEN } from '../../utils/Enum'

export default function CounterList ({ navigation }) {
  const { counter, theme } = useContext(Context)
  const { state: counterState, dispatch: counterDispatch } = counter
  const { state: themeState } = theme

  const [counterSelected, setCounterSelected] = useState()

  useEffect(() => {
    const counterSelected = counterState.counters.find(counter => counter.selected)
    setCounterSelected(counterSelected.index)
  }, [])

  function renderItem ({ item }) {
    return (
      <CounterView
        key={item.index}
        backgroundColor={item.index === counterSelected ? themeState.secondaryColor : themeState.septenaryColor}
        name={item.name}
        borderColor={themeState.primaryColor}
        currentValue={item.currentValue}
        selected={item.index === counterSelected}
        onPress={() => selectCounter(item.index)}
        onMinusIconPress={() => decrement(item.index)}
        onPlusIconPress={() => increment(item.index)}
        onEditIconPress={() => goToConfigPage(item.index)}
      />
    )
  }

  function increment (index) {
    if (index === counterSelected) {
      counterDispatch({ type: CONTEXT.COUNTER.INCREMENT, payload: { index } })
    }
  }

  function decrement (index) {
    if (index === counterSelected) {
      counterDispatch({ type: CONTEXT.COUNTER.DECREMENT, payload: { index } })
    }
  }

  function goToConfigPage (index) {
    console.log(index)
    navigation.navigate(NAVIGATION_SCREEN.COUNTER_CONFIG_SCREEN)
  }

  function selectCounter (index) {
    counterDispatch({ type: CONTEXT.COUNTER.SET_SELECTED_COUNTER, payload: { index } })
    setCounterSelected(index)
  }

  return (
    <CounterListContainer>
      <FlatList
        style={{ width: '100%' }}
        data={counterState.counters}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />

      {/* {teste()} */}
    </CounterListContainer>
  )
}
