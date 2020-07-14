import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function ListIcon () {
  const { tab } = useContext(Context)
  const { state: tabState } = tab

  return (
    <Icon icon='list' size={30} color={tabState.listIconColor} />
  )
}
