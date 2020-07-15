import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function EditIcon ({ color, counterView }) {
  const { tab } = useContext(Context)
  const { state: tabState } = tab

  return (
    <Icon icon='edit' size={30} color={counterView ? color : (tabState.configIconColor || color)} />
  )
}
