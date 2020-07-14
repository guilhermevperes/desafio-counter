import React, { useContext } from 'react'

import { GenericViewContainer, SafeAreaViewStyled, Content } from './genericViewStyled'

import Header from '../header/Header'

import { Context } from '../../context/index'

export default function GenericView ({ children }) {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  return (
    <SafeAreaViewStyled>
      <GenericViewContainer backgroundColor={themeState.quaternaryColor}>
        <Header />
        <Content>
          {children}
        </Content>
      </GenericViewContainer>
    </SafeAreaViewStyled>
  )
}
