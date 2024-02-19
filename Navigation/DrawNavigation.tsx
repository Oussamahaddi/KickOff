import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import AccueilScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAppDispatch } from '../hooks';
import Icon from "react-native-vector-icons/Ionicons";


const Drawer = createDrawerNavigator();

const DrawNavigation = () => {

  const dispatch = useAppDispatch()

  return (
    <Drawer.Navigator screenOptions={{headerTintColor : "white", headerStyle : {backgroundColor : "orange"}}}>
      <Drawer.Screen 
        name='Accueil'
        component={AccueilScreen}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="home-sharp" size={size} color={color}/>
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawNavigation

