import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Header from '../../components/commons/Header';
import { PROFILESCREEN } from '../../constant/routes';
import Avatar, { dogImage } from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import { colors } from '../../constant/colors';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
                    <Header screenName={PROFILESCREEN} isMyProfile={true} />
         <View style={styles.userProfileData}>
            <Avatar image={dogImage} />
            <View style={styles.data}>
                <ProfileData value={"1,234"} title={"Posts"} />
                <ProfileData value={"5,679"} title={"Followers"} />
                <ProfileData value={"9,534"} title={"Following"} />
            </View>
         </View>
         <View style={styles.userNameInfo}>
            <View>
            <Text style={styles.userName} >Username</Text>
            <Text style={styles.category}>Category/Genre text</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
            <Text style={styles.link}>Link goes here</Text>
            </View>
            <Image source={dogImage}
            style={{
                width:26,height:26,
                borderRadius:100,
                borderWidth:1.5,
                borderColor:colors.WHITE
            }}
            />
         </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},

    userProfileData:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center",
        paddingHorizontal:12
    },

    data:{
        flexDirection: 'row',
        gap:24
    },
    userNameInfo:{
        paddingTop:6,
        paddingHorizontal:12,
      paddingBottom:10
    },
    userName:{
        color:colors.BLACK,
        fontSize:13,
        fontWeight:"700",
       
    },
    category:{
        color:colors.GRAY,
        fontSize:13,
        fontWeight:"400",
    },
    description:{
        fontSize:13,
        fontWeight:"400",
        lineHeight:16,
    },
    link:{
        color:colors.DARKBLUE,
        fontSize:13,
        fontWeight:"700",
      lineHeight:18
    },

});

export default ProfileScreen;