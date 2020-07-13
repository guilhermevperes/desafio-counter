import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

import { Context } from '../../context/index'

export default function PlusIcon () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <Icon name='plus' size={30} color={themeState.primaryColor} />
  )
}
