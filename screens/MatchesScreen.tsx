import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SearchComponent from '../components/SearchComponent'
import MatcheComponent from '../components/MatcheComponent'

const MatchesScreen = () => {
  return (
    <ScrollView>
      <SearchComponent />
      <View style={styles.matchContainer}>
        <MatcheComponent />
        <MatcheComponent />
        <MatcheComponent />
        <MatcheComponent />
        <MatcheComponent />
        <MatcheComponent />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  matchContainer : {
    flex : 1,
    gap : 20,
    width : '90%', 
    marginLeft : 'auto', 
    marginRight : 'auto', 
    marginTop : 20,
  }
})

export default MatchesScreen