import { StyleSheet } from 'react-native';
import { colors } from '../../constant/colors';



export default StyleSheet.create({
  primary: {
    background: {
      backgroundColor: colors.BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:7,
      borderRadius:3
    },
    text:{
        color: colors.WHITE,
        fontSize:13,
        fontWeight:'700',
        lineHeight:16
    }
  },
  outline: {
    background: {
      backgroundColor: colors.GRAY1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:7,
      borderRadius:3,
      borderwidth:5,
      borderColor: colors.BLACK,
      flex: 1,
    },
    text:{
        color: colors.BLACK,
        fontSize:13,
        fontWeight:'700',
        lineHeight:16
    }
  },
});
