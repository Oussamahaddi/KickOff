import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAppDispatch } from '../hooks';
import Icon from "react-native-vector-icons/Ionicons";
import MatchesScreen from '../screens/MatchesScreen';
import { RootDrawerParamListT } from '../types/Types';
import { BLACK, WHITE } from '../styles/Post';


const Drawer = createDrawerNavigator<RootDrawerParamListT>();

const DrawNavigation = () => {

  const dispatch = useAppDispatch()

  return (
    <Drawer.Navigator screenOptions={{
      headerTintColor : WHITE, 
      headerShadowVisible : false, 
      headerStyle : {backgroundColor : BLACK}
    }}>
      <Drawer.Screen 
        name='Matches'
        component={MatchesScreen}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="football" size={size} color={color}/>
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawNavigation

