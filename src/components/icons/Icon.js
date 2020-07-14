import React from 'react'
import RNIcon from 'react-native-vector-icons/FontAwesome'

RNIcon.loadFont()

export default function Icon ({ icon, size, color }) {
  return (
    <RNIcon name={icon} size={size} color={color} />
  )
}
