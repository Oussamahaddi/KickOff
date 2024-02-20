import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { BLACK, WHITE } from '../styles/Post'

type SearchT = ['All Matches', 'Matche en Direct']

const data : SearchT = ['All Matches', 'Matche en Direct']

const SelectBoxComponent = () => {
  return (
    <View style={styles.container}>
      <SelectDropdown 
        data={data} onSelect={(selectedItem) => console.log(selectedItem)}
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