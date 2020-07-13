import React from 'react'
import 'react-native-gesture-handler'

import Routes from './routes'

import { Provider } from './context/index'

export default function App () {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}
