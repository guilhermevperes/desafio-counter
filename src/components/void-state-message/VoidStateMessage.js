
import React, { useContext } from 'react'

import { VoidStateMessageContainer } from './voidStateMessageStyled'

import Text from '../text/Text'
import SadIcon from '../icons/SadIcon'

import { Context } from '../../context/index'

import { FONTS, COUNTERS_SCREEN } from '../../utils/Enum'

export default function VoidStateMessage () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme
  return (
    <VoidStateMessageContainer>
      <SadIcon />
      <Text text={COUNTERS_SCREEN.VOID_MESSAGE} size='26px' textColor={themeState.secondaryColor} fontFamily={FONTS.BOLD} />
    </VoidStateMessageContainer>
  )
}
