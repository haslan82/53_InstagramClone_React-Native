import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { dogImage } from '../Avatar/Avatar'
import { colors } from '../../constant/colors'

const StoryRing2 = require("../../assets/image/StoryRing2.png")

const SavedIgStories = () => {
  return (
    <View style={{}}>
    <Image style={{
        width:55,
        height:55,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.DARK_GRAY,
        marginLeft: 10,
        marginTop: 10,
        padding:3
    }} source={StoryRing2}/>
    </View>
  )
}

export default SavedIgStories

const styles = StyleSheet.create({})