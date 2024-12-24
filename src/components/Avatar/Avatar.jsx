import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoryRing} from './StoryRing';
import {colors} from '../../constant/colors';


export const dogImage = require('../../assets/image/dog.png')
const Avatar = ({image}) => {
  return (
    <View style={styles.avatar}>
      <StoryRing />

      <Image
        style={styles.image}
        source={dogImage}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    position: 'absolute',
    borderWidth: 1,
    borderColor: colors.WHITE,
  }
});
