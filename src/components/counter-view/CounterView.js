import React, { useContext } from 'react'

import {
  CounterViewContainer,
  ContentViewEdit,
  ContentViewHeader,
  ContentViewBody,
  ContentViewFooter,
  TouchableOpacityStyled,
  ActionButtonsView,
  TextAuxView,
  InfoAuxView
} from './counterViewStyled'

import Text from '../text/Text'
import EditIcon from '../icons/EditIcon'
import PlusIcon from '../icons/PlusIcon'
import MinusIcon from '../icons/MinusIcon'

import { FONTS } from '../../utils/Enum'

import { Context } from '../../context/index'

export default function CounterView ({
  backgroundColor,
  name,
  currentValue,
  borderColor,
  selected,
  onPlusIconPress,
  onMinusIconPress,
  onEditIconPress,
  maxValue,
  minValue,
  ...props
}) {
  const { theme } = useContext(Context)
  const { state: themeState } = theme

  function renderEditiIcon () {
    return (
      <TouchableOpacityStyled onPress={onEditIconPress}>
        <EditIcon color={themeState.primaryColor} counterView />
      </TouchableOpacityStyled>
    )
  }

  return (
    <CounterViewContainer backgroundColor={backgroundColor} borderColor={borderColor} activeOpacity={1} {...props}>
      <ContentViewHeader>
        <Text text={name} size='18px' fontFamily={FONTS.SEMI_BOLD} textColor={themeState.primaryColor} />
      </ContentViewHeader>
      <ContentViewEdit>
        {selected ? renderEditiIcon() : null}
      </ContentViewEdit>
      <ContentViewBody>
        <Text text={currentValue} size='28px' fontFamily={FONTS.BOLD} textColor={themeState.quaternaryColor} />
      </ContentViewBody>
      <ContentViewFooter>
        <InfoAuxView>
          <TextAuxView>
            <Text text='Máximo: ' size='18px' fontFamily={FONTS.SEMI_BOLD} textColor={themeState.primaryColor} />
            <Text text={maxValue} size='18px' fontFamily={FONTS.SEMI_BOLD} textColor={themeState.quaternaryColor} />
          </TextAuxView>
          <TextAuxView>
            <Text text='Mínimo: ' size='18px' fontFamily={FONTS.SEMI_BOLD} textColor={themeState.primaryColor} />
            <Text text={minValue} size='18px' fontFamily={FONTS.SEMI_BOLD} textColor={themeState.quaternaryColor} />
          </TextAuxView>
        </InfoAuxView>
        <ActionButtonsView>
          <TouchableOpacityStyled onPress={onPlusIconPress}>
            <PlusIcon />
          </TouchableOpacityStyled>
          <TouchableOpacityStyled onPress={onMinusIconPress}>
            <MinusIcon />
          </TouchableOpacityStyled>
        </ActionButtonsView>
      </ContentViewFooter>
    </CounterViewContainer>
  )
}
