import React, { useContext } from 'react'

import GenericContainerView from '../components/generic-view/GenericView'
import EditConfigView from '../components/counter-view/EditCounterView'
import Text from '../components/text/Text'

import { CounterConfigView, CounterConfigFooterView } from '../components/view/counter-config-view/counterConfigViewStyled'

import { Context } from '../context/index'
import { COUNTER_CONFIG_SCREEN, FONTS } from '../utils/Enum'

export default function CounterConfigScreen () {
  const { theme } = useContext(Context)
  const { state: themeSate } = theme

  return (
    <GenericContainerView>
      <CounterConfigView>
        <CounterConfigFooterView>
          <Text text={COUNTER_CONFIG_SCREEN.SELECTED_COUNTER} textColor={themeSate.primaryColor} size='20px' fontFamily={FONTS.SEMI_BOLD} />
          <EditConfigView />
        </CounterConfigFooterView>
      </CounterConfigView>
    </GenericContainerView>
  )
}
