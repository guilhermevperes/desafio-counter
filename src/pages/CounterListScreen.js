import React from 'react'

import GenericContainerView from '../components/generic-view/GenericView'
import CounterList from '../components/counter-view/CounterList'

export default function CounterListScreen () {
  return (
    <GenericContainerView>
      <CounterList />
    </GenericContainerView>
  )
}
