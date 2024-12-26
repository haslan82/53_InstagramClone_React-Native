import React, { useState } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Header from '../../components/commons/Header';
import {PROFILESCREEN} from '../../constant/routes';
import Avatar, {
  dogImage,
  dogImage1,
  dogImage3,
} from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import {colors} from '../../constant/colors';
import CustomButton from '../../components/customButtons/CustomButton';
import PressableIcon from '../../components/ProfileFlow/PressableIcon';
import SavedIgStories from "../../components/ProfileFlow/SavedIgStories";
import TabNaviBar from '../../components/ProfileFlow/TabNaviBar';



const tabList=[
  "post",
  "reels",
  "user"
]

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View style={styles.container}>
      <Header screenName={PROFILESCREEN} isMyProfile={true} />
      <View style={styles.userProfileData}>
        <Avatar image={dogImage} />
        <View style={styles.data}>
          <ProfileData value={'1,234'} title={'Posts'} />
          <ProfileData value={'5,679'} title={'Followers'} />
          <ProfileData value={'9,534'} title={'Following'} />
        </View>
      </View>
      <View style={styles.userNameInfo}>
        <View>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.category}>Category/Genre text</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Text>
          <Text style={styles.link}>Link goes here</Text>
        </View>
        <View style={styles.followers}>
          <View style={styles.friends}>
            <Image source={dogImage1} style={[styles.friendsImage, {top: 1}]} />

            <Image
              source={dogImage}
              style={[
                styles.friendsImage,
                {
                  position: 'absolute',
                  left: 20,
                  zIndex: -1,
                  transform: [{rotate: '180deg'}], // 180 derece döndürme
                },
              ]}
            />

            <Image
              source={dogImage3}
              style={[
                styles.friendsImage,
                {
                  position: 'absolute',
                  left: 40,
                  zIndex: -2,
                  top: 0,
                },
              ]}
            />
          </View>

          <View style={styles.followersRight}>
            <Text style={styles.followed}>Followed by</Text>
            <Text style={styles.boldFollowed}>username</Text>
            <Text style={styles.boldFollowed}> username</Text>
            <Text style={styles.followed}> and</Text>
            <Text style={styles.boldFollowed}> 100 others</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomButton title={'Follow'} theme={'primary'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 6,
            }}>
            <CustomButton title={'Message'} theme={'outline'} />
            <CustomButton title={'Subscribe'} theme={'outline'} />
            <CustomButton title={'Contact'} theme={'outline'} />
            <PressableIcon />
          </View>
        </View>
        
      </View>
    <SavedIgStories />
    <TabNaviBar tabList={tabList} activeBar={activeTab} setActiveBar={setActiveTab} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  userProfileData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  data: {
    flexDirection: 'row',
    gap: 24,
  },
  userNameInfo: {
    paddingTop: 6,
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  userName: {
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '700',
    gap: 12,
  },
  category: {
    color: colors.GRAY,
    fontSize: 13,
    fontWeight: '400',
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  link: {
    color: colors.DARKBLUE,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  friends: {
    flexDirection: 'row',
    width: 54,
  },
  friendsImage: {
    width: 36,
    height: 36,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: colors.WHITE,
    transform: [{rotate: '5deg'}],
  },
  followers: {
    marginTop: 12,
    flexDirection: 'row',
    paddingBottom: 4,
  },
  followersRight: {
    marginLeft: 35,
    flexDirection: 'row',
    gap: 6,
    marginTop: 7,
  },
  followed: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.BLACK,
    lineHeight: 18,
  },
  boldFollowed: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.BLACK,
    lineHeight: 16,
  },
  buttons: {
    marginTop: 12,
    gap: 9,
  },
});

export default ProfileScreen;
