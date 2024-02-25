import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { BLACK, WHITE } from '../styles/Post'
import { Player } from '../types/playerTypes'

type Props = {
  player : Player
}

const PlayerComponent = ({player} : Props) => {
  return (
    <>
      <Image source={{uri: player.team_picture}} style={styles.flag}/>
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{player.player_name}</Text>
        <View style={{display: 'flex', flexDirection :'row', gap : 10}}>
          {
            player.position_short_name.split(',').map((position) => (
              <Text style={styles.playerPosition}>{position}</Text>
            ))
          }
        </View>
        <View style={styles.stats}>
          <View style={{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontWeight: '700', fontSize : 23}}>{player.sci_skill_smg}</Text>
            <Text style={{fontWeight : '600'}}>Skill</Text>
          </View>
          <View style={{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontWeight: '700', fontSize : 23}}>{player.sci_potential_smg}</Text>
            <Text style={{fontWeight : '600'}}>Potential</Text>
          </View>
          <View style={{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{fontWeight: '700', fontSize : 23}}>{player.age}</Text>
            <Text style={{fontWeight : '600'}}>Age</Text>
          </View>
        </View>
      </View>
      <View style={styles.playerPicture}>
        <Image source={{uri : player.player_picture}} style={{width : 100, aspectRatio : 1}}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  playerInfo : {
    flex : 2,
    gap : 10,
  },
  playerPicture : {
    flex: 1,
    marginLeft : 30
  },
  playerName : {
    fontSize : 30,
    fontWeight : '700',
  },
  stats : {
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'center',
    gap : 10,
  },
  flag : {
    width: 70,
    aspectRatio : 1,
    position: 'absolute',
    top : 20,
    right: '30%',
    borderRadius: 10,
    opacity : 0.6
  },
  playerPosition : {
    fontWeight: '600', 
    backgroundColor : BLACK, 
    color: WHITE,
    borderRadius: 10,
    padding: 5
  }
})

export default PlayerComponent