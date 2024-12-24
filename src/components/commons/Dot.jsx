import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constant/colors';

const Dot = () => {
  return <View style={styles.dot} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: colors.RED,
    borderWidth: 2,
    borderColor: colors.WHITE,
    position: 'absolute',
    left: 18,
    top: 2,
    zIndex: 100, // zIndex eklemek header üstünde olmasını sağlar.
  },
});
