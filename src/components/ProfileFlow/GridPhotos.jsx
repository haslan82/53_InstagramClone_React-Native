import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Photos } from '../../constant/Photos';





const GridPhotos = () => {
 
  return (
    <View style={styles.container}>
      <FlatList
        data={Photos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item,index }) => (
          <Image source={item} style={styles.image} />
        )}
        numColumns={3} // Görselleri 3 sütun halinde göster
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 100, // Görsel genişliği
    height: 100, // Görsel yüksekliği
    margin: 5,   // Görseller arasında boşluk
  },
});

export default GridPhotos;
