import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const UserAvatar = () => {
  return (
    <Image 
    source={{uri: 'https://i.pinimg.com/1200x/f6/aa/24/f6aa2407d3ca6532e0304d6cd0e9291d.jpg'}}
    style={styles.avatar}
    />
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar:{
        height:s(32),
        width:s(32),
        borderRadius:s(16)
    }
})