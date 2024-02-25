import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Match } from '../types/matcheTypes'
import { WHITE } from '../styles/Post'

const TeamComponent = ({team} : {team : Match}) => {
  return (
    <View style={styles.teamContainer}>
      <View style={{display : 'flex', alignItems : 'center', gap : 20}}>
        <Image 
          source={{uri : `https://api.sofascore.app/api/v1/team/${team.homeTeam.id}/image`}}
          style={styles.teamImg}
        />
        <Text style={styles.text}>{team.homeTeam.name}</Text>
      </View>
      <Text style={styles.score}>{team.homeScore.display} - {team.awayScore.display}</Text>
      <View style={{display : 'flex', alignItems : 'center', gap : 20}}>
        <Image 
          source={{uri : `https://api.sofascore.app/api/v1/team/${team.awayTeam.id}/image`}}
          style={styles.teamImg}
        />
        <Text style={styles.text}>{team.awayTeam.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  teamContainer : {
    display : 'flex', 
    flexDirection : 'row',
    alignItems : 'center',
    gap : 20,
    marginRight : 'auto',
    marginLeft : 'auto',
    marginTop: 40
  },
  text : {
    color : WHITE,
    fontWeight: '600',
    fontSize: 16
  },
  teamImg : {
    width : 70,
    aspectRatio : 1,
  },
  score : {
    color : WHITE, 
    fontSize : 25,
    borderRadius : 30, 
    paddingRight : 10, 
    paddingLeft : 10
  }
})

export default TeamComponent