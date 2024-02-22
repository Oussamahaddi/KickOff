import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { BLACK, WHITE } from '../styles/Post'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import { Match } from '../types/matcheTypes'

const MatcheComponent = ({matche} : {matche : Match}) => {
  return (
    <LinearGradient colors={['#2e2e2e', '#1d1d1d', '#181818']} style={styles.container}>
      <View style={{flex: 1, flexDirection : 'row', gap: 10, justifyContent: 'center'}}>
        <Image
          source={{uri : `https://api.sofascore.app/api/v1/unique-tournament/${matche.tournament.uniqueTournament.id}/image`}}
          style={{width : 25, aspectRatio: 1, backgroundColor : 'white', borderRadius : 100}}
        />
        <Text style={styles.text}>{matche.tournament.name}</Text>
      </View>
      <View style={styles.cardMatch}>
        <View style={{flex : 1, alignItems : 'center', gap: 10}}>
          <Image 
            source={{uri : `https://api.sofascore.app/api/v1/team/${matche.homeTeam.id}/image`}}
            style={styles.teamImg}
          />
          <Text style={styles.text}>{matche.homeTeam.name}</Text>
        </View>
        <View style={styles.score}>
          <Text style={{color : WHITE, fontSize : 25, backgroundColor : '#4d4d4d', borderRadius : 30, paddingRight : 10, paddingLeft : 10}}>0 - 0</Text>
          <Image source={require('../assets/vs.png')} style={{width: 20, height : 20}}/>
        </View>
        <View style={{flex : 1, alignItems : 'center', gap: 10}}>
          <Image 
            source={{uri : `https://api.sofascore.app/api/v1/team/${matche.awayTeam.id}/image`}}
            style={styles.teamImg}
          />
          <Text style={styles.text}>{matche.awayTeam.name}</Text>
        </View>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.calendar}>
        <View style={{flexDirection : 'row', gap : 5}}>
          <Icon name='calendar' color={WHITE} size={20} />
          <Text style={styles.text}>2020-10-20</Text>
        </View>
        <View style={{flexDirection : 'row', gap : 5}}>
          <Icon name='time' color={WHITE} size={20} />
          <Text style={styles.text}>2020-10-20</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    gap : 20,
    padding : 20,
    borderRadius : 20,
    shadowColor : "#3f02cc",
    elevation : 10,
  },
  cardMatch : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : 'center',
  },
  text : {
    color : WHITE,
    fontWeight: '600',
    fontSize: 16
  },
  score : {
    display : 'flex' , 
    flexDirection: 'column',
    alignItems : 'center',
    gap: 10
  },
  teamImg : {
    width : 50,
    height : 50,
  },
  hr : {
    marginLeft : 'auto',
    marginRight : 'auto',
    width : '100%',
    height : 1, 
    backgroundColor : WHITE
  },
  calendar : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
  }
})

export default MatcheComponent