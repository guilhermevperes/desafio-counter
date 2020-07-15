import React, { useContext } from 'react'

import { InputContainer, TextInputStyled } from './inputStyled'

import Text from '../../components/text/Text'

import { Context } from '../../context/index'

import { FONTS } from '../../utils/Enum'

export default function Input ({ name, value, setValue, keyboardType, maxLength }) {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <InputContainer>
      <Text text={name} size='20px' textColor={themeState.primaryColor} fontFamily={FONTS.SEMI_BOLD} />
      <TextInputStyled maxLength={maxLength} value={value} onChangeText={setValue} backgroundColor={themeState.secondaryColor} borderColor={themeState.primaryColor} keyboardType={keyboardType} />
    </InputContainer>
  )
}
