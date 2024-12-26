import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Grid, Play, User } from '../../assets/icons'

const TabNaviBar = ({
    tabList, activeBar,setActiveBar
}) => {
    console.log( tabList, activeBar,setActiveBar)
  return (
    <View style={styles.TabNaviBar} >

{tabList &&
        tabList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveBar(index)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        
   
    </View>
  )
}

export default TabNaviBar

const styles = StyleSheet.create({
    TabNaviBar: {
      flexDirection: 'row',
      justifyContent:'space-around',
      paddingHorizontal: 16,
      paddingVertical: 24,
  
    },
    icons: {
      width: 24,
      height: 24,
    }
  
})

  {/*  <View style={styles.icons} ><Grid/></View>
      <View style={styles.icons} ><Play/></View>
      <View style={styles.icons} ><User/></View> */}