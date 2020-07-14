import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function MinusIcon () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <Icon icon='minus' size={30} color={themeState.senaryColor} />
  )
}
