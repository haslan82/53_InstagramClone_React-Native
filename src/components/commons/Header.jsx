import {StyleSheet,View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  ChevronDown,
  Heart,
  IGLogo,
  Messages,
} from '../../assets/icons';
import Badge from './Badge';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftBox}>
        <IGLogo />
        <ChevronDown />
      </View>

      <View style={styles.rightBox}>
        <Heart />
        <Badge value={"10+"}/>
        <Messages />
        <AddFeeds />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 5,
  
 
  },
  leftBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  rightBox: {
   /*  width:120,// direk olarak width vermek olmaz
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"aqua" */

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  
    gap:24

  },
});
