import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
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
  const { players, loading } = useAppSelector(state => state.players)

  useEffect(() => {
    dispatch(fetchAllPlayersThunk());
  }, [])

  return (
    <ScrollView>
      <SearchComponent />
      {
        loading ? <Loading visible={loading}/> :
        players.map((player, index) => (
          <PlayerComponent key={index} player={player} />
        ))
      }
    </ScrollView>
  )
}

export default PlayersScreen