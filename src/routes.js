import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTab from './components/bottom-tab/BottomTab'

import { NAVIGATION_SCREEN } from './utils/Enum'

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION_SCREEN.BOTTOM_TAB} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION_SCREEN.BOTTOM_TAB} component={BottomTab}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
