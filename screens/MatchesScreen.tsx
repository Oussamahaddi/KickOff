import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootTabParamListT } from '../types/Types'
import { useAppDispatch, useAppSelector } from '../hooks'
import { RootState } from '../store'
import { fetchMatcheThunk } from '../features/Matches/matcheApi'
import MatcheComponent from '../components/MatcheComponent'
import SelectBoxComponent from '../components/SelectBoxComponent'
import Loading from '../components/loading'
import { fetchAllTournamentThunk } from '../features/Tournament/tournamentApi'

type MatchesScreenProps = NativeStackScreenProps<RootTabParamListT, 'Matches'>

const MatchesScreen : React.FC<MatchesScreenProps> = ({navigation}) => {

  const { matches, loading, uniqueTournament: tournament } = useAppSelector((state : RootState) => state.matches);
  const { tournaments } = useAppSelector((state : RootState) => state.tournaments);
  const dispatch = useAppDispatch();

  const filteredMatches = useMemo(() => {
    if (!tournament) return matches;
    return matches.filter(matche => matche.tournament.uniqueTournament.id === tournament.id);
  }, [matches, tournament]);

  useEffect(() => {
    dispatch(fetchMatcheThunk());
    dispatch(fetchAllTournamentThunk());
  }, [])

  return (
    <ScrollView>
      <SelectBoxComponent tournaments={tournaments} uniqueTournament={tournament} />
      <View style={styles.title}>
        <Text style={{fontWeight : '600', fontSize : 20}}>All Matches</Text>
      </View>
      <View style={styles.matchContainer}>
        {
          loading ? <Loading visible={loading} /> :
          filteredMatches.map((matche, index) => (
            <Pressable key={index} onPress={() => navigation.navigate('MatcheDetails', {matche})}>
              <MatcheComponent matche={matche} />
            </Pressable>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  matchContainer : {
    flex : 1,
    gap : 20,
    width : '90%', 
    marginLeft : 'auto', 
    marginRight : 'auto', 
    marginTop : 20,
  },
  title : {
    margin : 10, 
    flex : 1, 
    flexDirection : 'row', 
    alignItems : 'center', 
    gap: 10, 
    width: '90%'
  }
})

export default MatchesScreen