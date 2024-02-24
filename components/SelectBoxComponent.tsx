import { View, StyleSheet, Text, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { BLACK, WHITE } from '../styles/Post'
import {  UniqueTournament } from '../types/matcheTypes'
import { useAppDispatch } from '../hooks'
import { resetFilter, setTournament } from '../features/Matches/matchesSlice'

type Props = {
  tournaments : UniqueTournament[]
  uniqueTournament : UniqueTournament | null
} 

const SelectBoxComponent = ({tournaments, uniqueTournament} : Props) => {

  const dispatch = useAppDispatch(); 
  const dropDownRef = useRef<SelectDropdown>(null)

  const resetDropDown = () => {
    dropDownRef.current?.reset();
  }

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={tournaments} onSelect={(selectedItem : UniqueTournament) => {
          dispatch(setTournament(selectedItem))
        }}
        ref={dropDownRef}
        buttonStyle={{backgroundColor: WHITE,flex: 2, borderRadius: 10}}
        defaultButtonText='Select Matches'
        dropdownStyle={{borderRadius : 10,}}
        selectedRowStyle={{backgroundColor: '#d5d5d5'}}
        rowTextForSelection={(tournament : UniqueTournament) => tournament.name}
        buttonTextAfterSelection={(tournament : UniqueTournament) => tournament.name}
      />
      <Pressable 
        disabled={uniqueTournament ? false : true} 
        style={[styles.resetBtn, uniqueTournament ? {backgroundColor : WHITE} : {backgroundColor : '#a0a0a0'}]} 
        onPress={() => {
          resetDropDown();
          dispatch(resetFilter(null))
        }}
      >
        <Text style={{fontWeight: '500'}}>Reset</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'row',
    gap : 10,
    backgroundColor : BLACK,
    paddingVertical : 30,
    paddingHorizontal : 20,
    width : '100%',
  },
  resetBtn : {
    padding : 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default SelectBoxComponent