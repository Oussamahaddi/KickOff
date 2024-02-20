import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import { BLACK } from '../styles/Post'

const SearchComponent = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
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