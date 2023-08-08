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
        }, 14000)
    }, [])

    const renderSplash = () => {
        return (
            <View style={{backgroundColor: 'rgba(248,245,250,255)'}}>
                <View>
                    <Image  source={require('./image/modernSplash.gif')}
                    style={{width: '100%', height: '100%', resizeMode: 'cover'}}
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