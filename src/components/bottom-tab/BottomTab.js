import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CounterListScreen from '../../pages/CounterListScreen'
import CounterConfigScreen from '../../pages/CounterConfigScreen'

import ListIcon from '../icons/ListIcon'
import EditIcon from '../icons/EditIcon'

import { Context } from '../../context/index'

import { CONTEXT, HEADER, NAVIGATION_SCREEN } from '../../utils/Enum'

const Tab = createBottomTabNavigator()

export default function BottomTab ({ navigation }) {
  const { theme, tab } = useContext(Context)
  const { state: themeState } = theme
  const { dispatch: tabDispatch } = tab

  useEffect(() => {
    tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
    tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_LIST } })
  }, [])

  function ConfigScreen () {
    return (
      <CounterConfigScreen navigation={navigation} />
    )
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: themeState.primaryColor,
        inactiveBackgroundColor: themeState.primaryColor,
        showLabel: false
      }}
    >
      <Tab.Screen
        name={NAVIGATION_SCREEN.COUNTER_LIST_SCREEN}
        component={CounterListScreen}
        listeners={{
          tabPress: e => {
            tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.septenaryColor } })
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
        name={NAVIGATION_SCREEN.COUNTERS_SCREEN}
        component={ConfigScreen}
        listeners={{
          tabPress: e => {
            tabDispatch({ type: CONTEXT.TAB.SET_LIST_ICON_COLOR, payload: { color: themeState.septenaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_CONFIG_ICON_COLOR, payload: { color: themeState.tertiaryColor } })
            tabDispatch({ type: CONTEXT.TAB.SET_HEADER_TITLE, payload: { title: HEADER.TITLE.COUNTER_CONFIG } })
          }
        }}
        options={{
          showLabel: false,
          tabBarIcon: () => (
            <EditIcon color={themeState.secondaryColor} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
