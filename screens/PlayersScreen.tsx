import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PlayerComponent from '../components/PlayerComponent'
import SearchComponent from '../components/SearchComponent'

const PlayersScreen = () => {
  return (
    <ScrollView>
      <SearchComponent />
      <PlayerComponent />
      <PlayerComponent />
      <PlayerComponent />
      <PlayerComponent />
    </ScrollView>
  )
}

export default PlayersScreen