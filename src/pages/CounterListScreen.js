import React, { useContext } from 'react'

import GenericContainerView from '../components/generic-view/GenericView'
import CounterList from '../components/counter-view/CounterList'

import { Context } from '../context/index'

export default function CounterListScreen ({ navigation }) {
  const { counter } = useContext(Context)
  const { state: counterState } = counter

  return (
    <GenericContainerView>
      <CounterList navigation={navigation} />
    </GenericContainerView>
  )
}
