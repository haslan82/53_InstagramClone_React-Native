//import liraries
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import RouteNavigator from './src/routes/RouteNavigator';

// create a component
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
