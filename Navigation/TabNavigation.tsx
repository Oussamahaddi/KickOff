import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BLACK, WHITE } from '../styles/Post'
import { RootTabParamListT } from '../types/Types'
import MatchesScreen from '../screens/MatchesScreen'
import PlayersScreen from '../screens/PlayersScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator<RootTabParamListT>()

const TabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle : {backgroundColor : BLACK}, 
        tabBarActiveBackgroundColor : WHITE,
        tabBarActiveTintColor : BLACK,
      }}
    >
      <Tab.Screen 
        name='Matches'
        component={MatchesScreen}
        options={{
          headerShown: false,
          tabBarIcon : ({focused, color, size}) => (<Icon name='football' color={color} size={size} />),
        }} 
      />
      <Tab.Screen 
        name='Players'
        component={PlayersScreen}
        options={{
          headerShown: false, 
          tabBarIcon : ({focused, color, size}) => (<Icon name='home' color={color} size={size} />),
        }} 
      />
    </Tab.Navigator>
  )
}

export default TabNavigation