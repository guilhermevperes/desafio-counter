import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HelloScreen from './pages/HelloScreen'

import { NAVIGATION_SCREEN } from './utils/Enum'

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION_SCREEN.HELLO_SCREEN} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION_SCREEN.HELLO_SCREEN} component={HelloScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
