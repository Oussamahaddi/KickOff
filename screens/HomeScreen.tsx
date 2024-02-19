import { ScrollView, Pressable, Text } from 'react-native'
import React from 'react'
import {  RootStackParamListT } from '../types/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation : NativeStackNavigationProp<RootStackParamListT>
}

const AccueilScreen : React.FC<Props> = ({navigation}) => {

  return (
    <ScrollView>
      <Text>hellow world</Text>
    </ScrollView>
  )
}

export default AccueilScreen