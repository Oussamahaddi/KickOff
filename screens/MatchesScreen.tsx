import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MatcheComponent from '../components/MatcheComponent'
import SelectBoxComponent from '../components/SelectBoxComponent'

const MatchesScreen = () => {
  return (
    <ScrollView>
      <SelectBoxComponent />
      <View style={styles.title}>
        <Text style={{fontWeight : '600', fontSize : 20}}>All Matches</Text>
      </View>
      <View style={styles.matchContainer}>
        <Pressable>
          <MatcheComponent />
        </Pressable>
        <Pressable>
          <MatcheComponent />
        </Pressable>
        <Pressable>
          <MatcheComponent />
        </Pressable>
        <Pressable>
          <MatcheComponent />
        </Pressable>
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
  },
  title : {
    margin : 10, 
    flex : 1, 
    flexDirection : 'row', 
    alignItems : 'center', 
    gap: 10, 
    width: '90%'
  }
})

export default MatchesScreen