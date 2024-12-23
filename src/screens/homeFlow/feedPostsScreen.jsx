import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/commons/Header';

const FeedPostsScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <Text>FeedPostsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    }
});

export default FeedPostsScreen;