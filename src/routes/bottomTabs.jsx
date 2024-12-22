import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFlow from './homeFlow';
import SearchScreen from '../screens/searchFlow/SearchScreen';
import { HOMEFLOW, MARKETSFLOW, PROFILEFLOW, REELSFLOW, SEARCHFLOW } from '../constant/routes';
import MarketsScreen from '../screens/marketsFlow/MarketsScreen';
import ReelsScreen from '../screens/reelsFlow/ReelsScreen';
import ProfileScreen from '../screens/profileFlow/profileScreen';

const BottomTabs = () => {

  
const BottomTabsNavigator=createBottomTabNavigator();

    return (
       <BottomTabsNavigator.Navigator
        screenOptions={{
        headerShown:false
    }}
       >
        <BottomTabsNavigator.Screen name={HOMEFLOW} component={HomeFlow}/>
        <BottomTabsNavigator.Screen name={SEARCHFLOW} component={SearchScreen}/>
        <BottomTabsNavigator.Screen name={MARKETSFLOW} component={MarketsScreen}/>
        <BottomTabsNavigator.Screen name={REELSFLOW} component={ReelsScreen}/>
        <BottomTabsNavigator.Screen name={PROFILEFLOW} component={ProfileScreen}/>
       </BottomTabsNavigator.Navigator>
    );
};



export default BottomTabs;