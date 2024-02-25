import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListT } from '../types/Types';
import { BLACK, WHITE } from '../styles/Post';
import TabNavigation from './TabNavigation';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import MatcheDetailsScreen from '../screens/MatcheDetailsScreen';
import PlayerDetailsScreen from '../screens/PlayerDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamListT>();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{
          headerTintColor : WHITE, headerStyle: {backgroundColor: BLACK},
          statusBarColor : BLACK,
        }}
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
        <Stack.Screen 
          name='MatcheDetails'
          component={MatcheDetailsScreen}
        />
        <Stack.Screen 
          name='PlayerDetails'
          component={PlayerDetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;