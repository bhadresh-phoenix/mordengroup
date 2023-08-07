import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screen/SplashScreen'
import WebViewScreen from '../screen/WebViewScreen'

const AuthStack = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
            options={{headerShown: false}}
            name='Splash' component={SplashScreen} />
        <Stack.Screen
            options={{headerShown: false}}
            name='WebViewScreen' component={WebViewScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack