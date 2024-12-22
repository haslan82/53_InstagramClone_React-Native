import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import FeedPostsScreen from '../screens/homeFlow/feedPostsScreen';
import ProfileScreen from '../screens/profileFlow/profileScreen';

const HomeFlow = () => {

const HomeFlowStack = createNativeStackNavigator();

    return (
        <HomeFlowStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <HomeFlowStack.Screen name="FeedPostScreen" component={FeedPostsScreen} />
            <HomeFlowStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <HomeFlowStack.Screen name="FeedPosts" component={FeedPostsScreen} />
        </HomeFlowStack.Navigator>
    );
};


export default HomeFlow;