import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function EditIcon () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <Icon icon='edit' size={30} color={themeState.primaryColor} />
  )
}
