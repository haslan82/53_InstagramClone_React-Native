import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../constant/colors'

const Badge = ({value}) => {
  return (
    <View style={styles.badge} >
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
  badge:{
    backgroundColor:colors.RED,
    paddingHorizontal:4,
    borderRadius:10
  },
  badgeText:{
    color:colors.WHITE,
    fontSize:12,
    fontWeight:"400",
    lineHeight:18
  }
})