import { View, Text, Image, StyleSheet,  } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Gif from 'react-native-gif'

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true)
    const navigation = useNavigation()

    const hideSplashScreen = () =>{
        setIsVisible(false)
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen()
            navigation.navigate('WebViewScreen')
        }, 2000)
    }, [])

    const renderSplash = () => {
        return (
            <View style={{backgroundColor: '#FFFFFF'}}>
                <View>
                    <Image  source={require('./image/splash.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                    />
                </View>
            </View>
        )
    }

  return (
    <View>
      {isVisible === true ? renderSplash(): null}
    </View>
  )
}

export default SplashScreen