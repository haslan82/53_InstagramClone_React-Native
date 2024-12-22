import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthFlow from './AuthFlow';
import {AUTHFLOW, MAINFLOW} from '../constant/routes';
import BottomTabs from './bottomTabs';
import {useState} from 'react';

const RouteNavigator = () => {
  const RouteNavigatorStack = createNativeStackNavigator();
  const [token, setToken] = useState(true);

  return (
    <RouteNavigatorStack.Navigator
    screenOptions={{
        headerShown:false
    }}
    initialRouteName={AUTHFLOW}>

        {token ?<RouteNavigatorStack.Screen name={MAINFLOW} component={BottomTabs} /> :
      <RouteNavigatorStack.Screen name={AUTHFLOW} component={AuthFlow} />
      }
    </RouteNavigatorStack.Navigator>
  );
};

export default RouteNavigator;
