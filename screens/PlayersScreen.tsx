import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import PlayerComponent from '../components/PlayerComponent'
import SearchComponent from '../components/SearchComponent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootTabParamListT } from '../types/Types'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAllPlayers } from '../features/Players/playersSlice'

type PlayerScreenProps = NativeStackScreenProps<RootTabParamListT, 'Players'>

const PlayersScreen : React.FC<PlayerScreenProps> = ({}) => {

  const dispatch = useAppDispatch();
  const { players } = useAppSelector(state => state.players)

  useEffect(() => {
    dispatch(fetchAllPlayers());
  }, [])

  return (
    <ScrollView>
      <SearchComponent />
      <PlayerComponent  />
      <PlayerComponent  />
    </ScrollView>
  )
}

export default PlayersScreen