import React from 'react'

import { TextStyled } from './textStyled'

export default function Text ({ fontFamily, textColor, size, text }) {
  return (
    <TextStyled fontFamily={fontFamily} textColor={textColor} size={size}>
      {text}
    </TextStyled>
  )
}
