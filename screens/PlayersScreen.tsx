import { Pressable, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import PlayerComponent from '../components/PlayerComponent'
import SearchComponent from '../components/SearchComponent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootTabParamListT } from '../types/Types'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAllPlayersThunk } from '../features/Players/playerApi'
import Loading from '../components/loading'
import { WHITE } from '../styles/Post'

type PlayerScreenProps = NativeStackScreenProps<RootTabParamListT, 'Players'>

const PlayersScreen : React.FC<PlayerScreenProps> = ({navigation}) => {

  const dispatch = useAppDispatch();
  const { players, loading, playerName } = useAppSelector(state => state.players)

  const searchPlayer = useMemo(() => {
    if (!playerName) return players;
    return players.filter(player => player.player_name.includes(playerName));
  }, [players, playerName])

  useEffect(() => {
    dispatch(fetchAllPlayersThunk());
  }, [])

  return (
    <ScrollView>
      <SearchComponent name={playerName} />
      {
        loading ? <Loading visible={loading}/> :
        searchPlayer.map(player => (
          <Pressable style={({pressed}) => [
            {backgroundColor : pressed ? "#c2c1c1" : WHITE}, 
            styles.container]}
            onPress={() => navigation.navigate("PlayerDetails", {player})}
          >
            <PlayerComponent player={player} />
          </Pressable>
        ))
      }
    </ScrollView>
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
})

export default PlayersScreen