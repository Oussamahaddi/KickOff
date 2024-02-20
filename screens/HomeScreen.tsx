import { Pressable, Text, Image, View, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import {  RootStackParamListT } from '../types/Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

type HomeScreenProps = NativeStackScreenProps<RootStackParamListT, 'Home'>

const HomeScreen : React.FC<HomeScreenProps> = ({navigation}) => {

  return (
    <ImageBackground source={require('../assets/background.png')} resizeMode='stretch' style={styles.bg}>
      <View>
        <Image source={require('../assets/logo.png')}/>
        <Text>Find all matches you need here!</Text>
      </View>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('Tab')}>
        <Text style={styles.btn_text}>Next</Text>
        <Icon name="arrow-forward" color={'white'} size={25} />
      </Pressable>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  btn : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    width : 200,
    borderRadius : 10,
    backgroundColor : 'black',
    position : 'absolute',
    right : -10,
    bottom : '10%',
    paddingHorizontal : 20,
    paddingVertical : 20,
  },
  btn_text : {
    color : 'white',
    fontSize : 25,
    fontWeight : '600',
  }
})

export default HomeScreen