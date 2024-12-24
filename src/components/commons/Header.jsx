import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AddFeeds,
  BurgerMenu,
  ChevronDown,
  Heart,
  IGLogo,
  LeftChevron,
  Messages,
  More,
  Notification,
  VerifiedBadge,
} from '../../assets/icons';
import Badge from './Badge';
import Dot from './Dot';
import {FEEDPOSTSCREEN, PROFILESCREEN} from '../../constant/routes';
import Title, {titleTypes} from '../Title';

const Header = ({isMyProfile, screenName}) => {
  return (
    <View style={styles.header}>
      {/* eğer feeds sayfası açıksa */}
      {screenName === FEEDPOSTSCREEN ? (
        <View style={styles.leftBox}>
          <IGLogo />
          <ChevronDown />
        </View>
      ) : // Feed sayfası değilse ve kendi profil sayfamdaysam gerçekleşecek koşul

      isMyProfile ? (
        <View style={[styles.leftBox, {alignItems: 'center'}]}>
          <Title text={'My Profile'} theme={titleTypes.TEXT_22_700_40} />
          <Badge value={12} />
        </View>
      ) : (
        // Başkasının profil sayfasında ise gerçekleşecek koşul

        <LeftChevron />
      )}
      {/* profil ekranındaysa ve başkasının profilindeyse */}
      {screenName == PROFILESCREEN && isMyProfile === false && (
        <View style={styles.middleBox}>
          <Title text={'username'} theme={titleTypes.TEXT_16_700} />
          <VerifiedBadge />
        </View>
      )}
      {/*  feed ekranındaysa gelecek koşul*/}
      {screenName === FEEDPOSTSCREEN ? (
        <View style={styles.rightBox}>
          
          <Heart />
          <Messages />
          <Dot />
          <Badge customStyle={styles.badge} value={'10'} />
          <AddFeeds />
        </View>
      ) : 

      /* kendi profilindeysem */

      isMyProfile ? (
        <View style={styles.rightBox}>
          <AddFeeds />
          <BurgerMenu />
        </View>
      ) : (
        /* kendi profilindeysem */
        <View style={styles.rightBox}>
          <Notification />
          <More />
        </View>
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 24,
   
    /*  width:120,// direk olarak width vermek olmaz.Responsive yapıya uygun değil
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"aqua" */
  },
  badge: {
    position: 'absolute',
    left: 66,
    top: -3,
    borderRadius: 100,
    zIndex: 100, // zIndex eklemek header üstünde olmasını sağlar.
  },
  middleBox: {
    flexDirection: 'row',
    justifyContent: 'space-start',
    gap: 4,
    alignItems: 'center',
  },
 
});
