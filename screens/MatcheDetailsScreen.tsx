import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { BLACK, DIMESION_HEIGHT, DIMESION_WIDTH, WHITE } from '../styles/Post'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamListT } from '../types/Types'
import TeamComponent from '../components/TeamComponent'
type MatcheDetailScreenProps = NativeStackScreenProps<RootStackParamListT, 'MatcheDetails'>

const MatcheDetailsScreen : React.FC<MatcheDetailScreenProps> = ({route}) => {

  const matche = route.params.matche

  console.log(matche.tournament.name)

  return (
    <View style={styles.container}>
      <View style={styles.leagueContainer}>
        <Image
          source={{uri : `https://api.sofascore.app/api/v1/unique-tournament/${matche.tournament.uniqueTournament.id}/image`}}
          style={{width : 25, aspectRatio: 1, backgroundColor : 'white', borderRadius : 100}}
        />
        <Text style={{color : BLACK}}>{matche.tournament.name}</Text>
      </View>
      <View>
        <TeamComponent team={matche}/>
      </View>
      <View style={styles.matchDetails}>
        <View style={{marginBottom : 20}}>
          <Text style={{fontSize : 20, fontWeight : '700'}}>Matche Details</Text>
        </View>
          
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
  container : {
    backgroundColor : BLACK,
    width : DIMESION_WIDTH,
    height : DIMESION_HEIGHT,
  },
  leagueContainer : {
    display: 'flex',
    flexDirection : 'row',
    alignSelf : 'flex-start',
    alignItems: 'center',
    marginTop : 20,
    backgroundColor : WHITE,
    padding : 10,
    marginRight : 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
  },
  matchDetails : {
    width : DIMESION_WIDTH,
    height : '100%',
    backgroundColor : WHITE,
    marginTop : 30,
    borderTopEndRadius : 40,
    borderTopLeftRadius : 40,
    padding : 20
  }
  
})

export default MatcheDetailsScreen