import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constant/colors';
import {storyList} from '../../constant/DummyData';

const StoryRing2 = require('../../assets/image/StoryRing2.png');

const SavedIgStories = () => {
 
  return (
    <View style={styles.savedIgStories}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={<View style={{width:18}}/>}
    data={storyList}
     renderItem={({item,index})=>
     <View 
     key={index}
     style={styles.save}>
     <Image style={styles.image} source={StoryRing2} />
     <Text style={styles.storyText}>{item.storyDesc}</Text>
   </View>
   } 
     horizontal={true} />
    </View>
  );
};

export default SavedIgStories;

const styles = StyleSheet.create({
  savedIgStories: {
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  save: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.DARK_GRAY,
    marginLeft: 10,
    marginTop: 10,
    padding: 3,
  },
  storyText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.GRAY,
    marginLeft: 13,
    marginTop: 3,
    lineHeight: 14,
    letterSpacing: -0.4,
  },
});
