import { View, StyleSheet } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { BLACK, WHITE } from '../styles/Post'
import { UniqueTournament } from '../types/matcheTypes'
import { useAppDispatch } from '../hooks'
import { filterByTournamentName } from '../features/Matches/matchesSlice'

const SelectBoxComponent = ({tournaments} : {tournaments : UniqueTournament[]}) => {

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <SelectDropdown 
        data={tournaments.map(tournament => tournament.name)} onSelect={(selectedItem) => dispatch(filterByTournamentName(selectedItem))}
        buttonStyle={{backgroundColor: WHITE, width: '100%', borderRadius: 10}}
        defaultButtonText='Select Matches'
        dropdownStyle={{borderRadius : 10,}}
        selectedRowStyle={{backgroundColor: '#d5d5d5'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : BLACK,
    paddingVertical : 30,
    paddingHorizontal : 20,
    width : '100%',
  }
})

export default SelectBoxComponent