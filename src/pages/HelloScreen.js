import React, { useContext } from 'react'

import PlusIcon from '../components/icons/PlusIcon'

import { HelloView } from '../components/view/helloView/helloViewStyled'
import { Text } from '../components/text/textStyled'

import { Context } from '../context/index'

export default function HelloScreen () {
  const { hello, theme } = useContext(Context)
  const { state: helloState } = hello
  const { state: themeState } = theme

  return (
    <HelloView backgroundColor={themeState.secondaryColor}>
      <Text color={themeState.primaryColor}>
        {helloState.helloMessage}
      </Text>
      <PlusIcon />
    </HelloView>
  )
}
