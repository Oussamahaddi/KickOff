import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import { BLACK } from '../styles/Post'
import { useAppDispatch } from '../hooks'
import { searchByName } from '../features/Players/playersSlice'

const SearchComponent = ({name} : {name : string}) => {

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search..."
        onChangeText={(text) => {
          dispatch(searchByName(text))
        }}
        value={name}
        style={{borderRadius : 10}}
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

export default SearchComponent