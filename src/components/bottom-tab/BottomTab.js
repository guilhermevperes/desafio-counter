import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CounterListScreen from '../../pages/CounterListScreen'
import CounterConfigScreen from '../../pages/CounterConfigScreen'

import ListIcon from '../icons/ListIcon'
import ConfigIcon from '../icons/ConfigIcon'

import { Context } from '../../context/index'

import { CONTEXT, HEADER } from '../../utils/Enum'

const Tab = createBottomTabNavigator()

export default function BottomTab () {
  const { theme, tab } = useContext(Context)
  const { state: themeState } = theme
  const { dispatch: tabDispatch } = tab

  useEffect(() => {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.secondaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }, [])

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: themeState.primaryColor,
        inactiveBackgroundColor: themeState.primaryColor,
        showLabel: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={CounterListScreen}
        listeners={{
          tabPress: e => {
            tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.secondaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
          }
        }}
        options={{
          showLabel: false,
          tabBarIcon: () => (
            <ListIcon color={themeState.tertiaryColor} />
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={CounterConfigScreen}
        listeners={{
          tabPress: e => {
            tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.secondaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_CONFIG } })
          }
        }}
        options={{
          showLabel: false,
          tabBarIcon: () => (
            <ConfigIcon color={themeState.secondaryColor} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
