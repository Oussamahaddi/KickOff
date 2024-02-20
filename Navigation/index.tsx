import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListT } from '../types/Types';
import { BLACK, WHITE } from '../styles/Post';
import TabNavigation from './TabNavigation';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator<RootStackParamListT>();

const Navigation = ({navigation} : {navigation : RootStackParamListT}) => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{statusBarColor: BLACK, headerTintColor : WHITE, headerStyle: {backgroundColor: BLACK}}}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='Tab'
          component={TabNavigation} 
          options={({navigation} : {navigation : NavigationProp<RootStackParamListT, 'Tab'>}) => ({
            title: "Matches",
            headerShown : true, 
            headerRight : () => (
              <Icon name="heart" color={WHITE} size={30} onPress={() => navigation.navigate('Favorites')}/>
            )
          })} 
        />
        <Stack.Screen 
          name='Favorites'
          component={FavoriteScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;