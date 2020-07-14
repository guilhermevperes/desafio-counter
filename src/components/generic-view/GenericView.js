import React, { useContext } from 'react'

import { GenericViewContainer, SafeAreaViewStyled } from './genericViewStyled'

import Header from '../header/Header'

import { Context } from '../../context/index'

export default function GenericView () {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <SafeAreaViewStyled>
      <GenericViewContainer backgroundColor={themeState.secondaryColor}>
        <Header />
      </GenericViewContainer>
    </SafeAreaViewStyled>
  )
}
