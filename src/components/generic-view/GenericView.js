import React, { useContext } from 'react'

import { GenericViewContainer, ScrollGenericViewContainer, SafeAreaViewStyled, Content } from './genericViewStyled'

import Header from '../header/Header'

import { Context } from '../../context/index'

export default function GenericView ({ children, scroll }) {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  function renderScroll () {
    return (
      <ScrollGenericViewContainer backgroundColor={themeState.quaternaryColor}>
        <Header />
        <Content>
          {children}
        </Content>
      </ScrollGenericViewContainer>
    )
  }

  function renderNormal () {
    return (
      <GenericViewContainer backgroundColor={themeState.quaternaryColor}>
        <Header />
        <Content>
          {children}
        </Content>
      </GenericViewContainer>
    )
  }

  return (
    <SafeAreaViewStyled>
      {scroll ? renderScroll() : renderNormal()}
    </SafeAreaViewStyled>
  )
}
