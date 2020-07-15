import React, { useContext } from 'react'

import { ButtonContainer } from './buttonStyled'

import Text from '../text/Text'

import { Context } from '../../context/index'

import { FONTS } from '../../utils/Enum'

export default function Button ({ name, onPress }) {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <ButtonContainer activeOpacity={0.5} onPress={onPress} backgroundColor={themeState.secondaryColor}>
      <Text text={name} size='16px' fontFamily={FONTS.BOLD} textColor={themeState.primaryColor} />
    </ButtonContainer>
  )
}
