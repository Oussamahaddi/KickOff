import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DrawNavigation from './DrawNavigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { BLACK, WHITE } from '../styles/Post'
import { RootDrawerParamListT, RootTabParamListT } from '../types/Types'

const Tab = createBottomTabNavigator<RootTabParamListT>()

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle : {backgroundColor : BLACK}}}>
      <Tab.Screen 
        name='Draw'
        component={DrawNavigation}
        options={{
          title : 'Accueil',
          headerShown: false, 
          tabBarIcon : ({focused, color, size}) => (<Icon name='home' color={color} size={size} />),
          tabBarInactiveTintColor : WHITE
        }} 
      />
      <Tab.Screen 
        name='Favorite'
        component={DrawNavigation}
        options={{
          headerShown: false, 
          tabBarIcon : ({focused, color, size}) => (<Icon name='home' color={color} size={size} />),
          tabBarInactiveTintColor : WHITE
        }} 
      />
    </Tab.Navigator>
  )
}

export default TabNavigation