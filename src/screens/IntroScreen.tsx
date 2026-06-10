import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TeaShopLogo from '../../assets/TeaShopLogo'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <TeaShopLogo style={styles.teaShopLogo}/>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    teaShopLogo:{
        position:`absolute`
    }
})