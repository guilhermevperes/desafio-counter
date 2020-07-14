import React from 'react'

import GenericContainerView from '../components/generic-view/GenericView'
import CounterList from '../components/counter-view/CounterList'

export default function CounterListScreen ({ navigation }) {
  return (
    <GenericContainerView>
      <CounterList navigation={navigation} />
    </GenericContainerView>
  )
}
