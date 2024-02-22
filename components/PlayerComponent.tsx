import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { WHITE } from '../styles/Post'
import { LinearGradient } from 'expo-linear-gradient'

const PlayerComponent = ({}) => {
  return (
    <Pressable style={({pressed}) => [{backgroundColor : pressed ? "#c2c1c1" : WHITE}, styles.container]}>
      <Image source={require('../assets/flag.png')} style={styles.flag}/>
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>Player Name</Text>
        <Text style={{color : '#242323', fontSize : 18, fontWeight: '600'}}>Placement</Text>
        <View style={styles.stats}>
          <View style={{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontWeight: '700', fontSize : 30}}>9</Text>
            <Text style={{fontWeight : '600'}}>Matchs</Text>
          </View>
          <View style={{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontWeight: '700', fontSize : 30}}>22</Text>
            <Text style={{fontWeight : '600'}}>assists</Text>
          </View>
          <View style={{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontWeight: '700', fontSize : 30}}>2</Text>
            <Text style={{fontWeight : '600'}}>goals</Text>
          </View>
        </View>
      </View>
      <View style={styles.playerPicture}>
        <Image source={require('../assets/player.png')} style={{width : 140, height : 150}}/>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection : 'row',
    alignItems: 'center',
    padding : 20,
    width : '90%',
    marginTop: 20,
    marginLeft : 'auto',
    marginRight: 'auto',
    borderRadius : 20,
    shadowColor: "#3f02cc",
    shadowRadius: 20,
    elevation: 10,
    borderTopEndRadius : 150,
    borderTopStartRadius : 0,
    borderBottomEndRadius : 150,
    borderBottomStartRadius : 0,
  },
  playerInfo : {
    flex : 2,
    gap : 10,
  },
  playerPicture : {
    flex: 1,
    position : 'relative',
    justifyContent: 'center',
  },
  playerName : {
    fontSize : 30,
    fontWeight : '700'
  },
  stats : {
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'center',
    gap : 10,
  },
  flag : {
    width: 50, 
    height: 40, 
    resizeMode: 'stretch',
    position: 'absolute',
    top : 10,
    right: '30%',
    borderRadius: 10,
  }
})

export default PlayerComponent