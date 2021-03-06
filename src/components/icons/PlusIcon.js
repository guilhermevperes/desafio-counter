import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function PlusIcon () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <Icon icon='plus' size={30} color={themeState.quinaryColor} />
  )
}
