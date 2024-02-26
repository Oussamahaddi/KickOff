import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useAppSelector } from '../hooks'
import MatcheComponent from '../components/MatcheComponent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamListT } from '../types/Types'

type FavoritesScreenProps = NativeStackScreenProps<RootStackParamListT, "Favorites">

const FavoriteScreen : React.FC<FavoritesScreenProps> = ({navigation}) => {

  const {favoriteMatches} = useAppSelector(state => state.matches)

  return (
    <ScrollView>
      <View style={styles.title}>
        <Text style={{fontWeight : '600', fontSize : 20}}>Favorites Matches</Text>
      </View>
      <View style={styles.matchContainer}>
        {
          favoriteMatches.length > 0 ?   
          favoriteMatches.map((matche, index) => (
            <Pressable key={index} onPress={() => navigation.navigate('MatcheDetails', {matche})}>
              <MatcheComponent matche={matche} />
            </Pressable>
          )) : 
          <Text>No Matches liked</Text>
        }
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

export default FavoriteScreen