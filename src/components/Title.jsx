import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({theme="default"}) => {
  return (
    
      <Text style={styles[theme]}>Title</Text>
   
  )
}

export default Title

export const styles = {
    default:StyleSheet.create({
        color:colors.WHITE,
        fontSize:12,
        fontWeight:"400",
        lineHeight:18
    })}