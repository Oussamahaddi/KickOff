import {NavigationContainer, RouteProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListT } from '../types/Types';

import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator<RootStackParamListT>();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{statusBarColor: 'black',headerTintColor : "white", headerStyle: {backgroundColor: 'orange'}}}
      >
        <Stack.Screen 
          name='Home' 
          component={TabNavigation} 
          options={{headerShown : false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;