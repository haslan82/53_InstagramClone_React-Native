import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Frame6} from '../../assets/icons/Frame6';
import {colors} from '../../constant/colors';

const PressableIcon = () => {
  return (
    <TouchableOpacity style={styles.box}>
      <Frame6 />
    </TouchableOpacity>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  box: {
    borderRadius: 3,
    padding: 7,
    backgroundColor: colors.GRAY1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
