import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function SadIcon () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <Icon icon='exclamation-circle' size={60} color={themeState.secondaryColor} />
  )
}
