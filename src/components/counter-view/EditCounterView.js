import React, { useContext } from 'react'

import { EditCounterViewContainer, EditAuxView, EditAuxFooterView, EditAuxButtonView } from './counterViewStyled'

import Text from '../text/Text'
import Button from '../button/Button'

import { Context } from '../../context/index'

import { FONTS, CONTEXT, COUNTER_CONFIG_SCREEN } from '../../utils/Enum'

export default function EditCounterView () {
  const { theme, counter } = useContext(Context)
  const { state: themeState } = theme
  const { state: counterState, dispatch: counterDispatch } = counter

  return (
    <EditCounterViewContainer borderColor={themeState.secondaryColor}>
      <EditAuxView>
        <Text text={COUNTER_CONFIG_SCREEN.COUNTER_NAME} size='20px' textColor={themeState.primaryColor} fontFamily={FONTS.SEMI_BOLD} />
        <Text text={counterState.counters[counterState.selectedCounter].name} size='20px' textColor={themeState.secondaryColor} fontFamily={FONTS.SEMI_BOLD} />
      </EditAuxView>
      <EditAuxView>
        <Text text={COUNTER_CONFIG_SCREEN.CURRENT_VALUE} size='20px' textColor={themeState.primaryColor} fontFamily={FONTS.SEMI_BOLD} />
        <Text text={counterState.counters[counterState.selectedCounter].currentValue} size='20px' textColor={themeState.secondaryColor} fontFamily={FONTS.SEMI_BOLD} />
      </EditAuxView>
      <EditAuxFooterView>
        <EditAuxButtonView>
          <Button name={COUNTER_CONFIG_SCREEN.INCREMENT} onPress={() => counterDispatch({ type: CONTEXT.COUNTER.INCREMENT, payload: { index: counterState.selectedCounter } })} />
        </EditAuxButtonView>
        <EditAuxButtonView>
          <Button name={COUNTER_CONFIG_SCREEN.DECREMENT} onPress={() => counterDispatch({ type: CONTEXT.COUNTER.DECREMENT, payload: { index: counterState.selectedCounter } })} />
        </EditAuxButtonView>
      </EditAuxFooterView>
    </EditCounterViewContainer>
  )
}
