import { ScrollView } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import PlayerComponent from '../components/PlayerComponent'
import SearchComponent from '../components/SearchComponent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootTabParamListT } from '../types/Types'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAllPlayersThunk } from '../features/Players/playerApi'
import Loading from '../components/loading'

type PlayerScreenProps = NativeStackScreenProps<RootTabParamListT, 'Players'>

const PlayersScreen : React.FC<PlayerScreenProps> = ({}) => {

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
        searchPlayer.map((player, index) => (
          <PlayerComponent key={index} player={player} />
        ))
      }
    </ScrollView>
  )
}

export default PlayersScreen