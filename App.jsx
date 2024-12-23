//import liraries
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RouteNavigator from './src/routes/RouteNavigator';
import { colors } from './src/constant/colors';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
     
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safe:{
   flex:1,
   backgroundColor:colors.WHITE,
  },
 
})