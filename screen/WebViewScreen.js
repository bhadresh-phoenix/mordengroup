import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import WebView from 'react-native-webview'
import { BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WebViewScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        const closeApp= navigation.addListener('beforeRemove', e => {
            e.preventDefault()
            BackHandler.exitApp()
        })
        return closeApp
    })
  return (
    <WebView 
        source={{uri: 'https://warehouse.themoderngroup.co/'}}
    />
  )
}

export default WebViewScreen