import React, { useContext } from 'react'

import Icon from './Icon'

import { Context } from '../../context/index'

export default function ConfigIcon () {
  const { tab } = useContext(Context)
  const { state: tabState } = tab

  return (
    <Icon icon='plus-square' size={30} color={tabState.configIconColor} />
  )
}
