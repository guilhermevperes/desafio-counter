import React, { useContext } from 'react'

import { HeaderStyled } from './headerStyled'

import Text from '../text/Text'

import { Context } from '../../context/index'

import { FONTS } from '../../utils/Enum'

export default function Header ({ title }) {
  const { theme, tab } = useContext(Context)
  const { state: themeState } = theme
  const { state: tabState } = tab

  return (
    <HeaderStyled backgroundColor={themeState.primaryColor}>
      <Text size='24PX' textColor={themeState.secondaryColor} fontFamily={FONTS.BOLD} text={tabState.headerTitle} />
    </HeaderStyled>
  )
}
