import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import FeedPostsScreen from '../screens/homeFlow/feedPostsScreen';
import ProfileScreen from '../screens/profileFlow/profileScreen';
import {FEEDPOSTSCREEN, PROFILESCREEN} from '../constant/routes';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();

  return (
    <HomeFlowStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: styles.content,
      }}
      initialRouteName={PROFILESCREEN}>
      <HomeFlowStack.Screen name={FEEDPOSTSCREEN} component={FeedPostsScreen} />
      <HomeFlowStack.Screen name={PROFILESCREEN} component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};

export default HomeFlow;

const styles = StyleSheet.create({
  content: {
    //  backgroundColor: 'red', // Arka plan rengini burada belirtiyoruz
  },
});
