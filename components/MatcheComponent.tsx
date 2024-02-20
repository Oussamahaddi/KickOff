import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { WHITE } from '../styles/Post'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const MatcheComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection : 'row', gap: 10, justifyContent: 'center'}}>
        <Image
          source={require('../assets/ligualogo.png')}
        />
        <Text style={styles.text}>Premier league</Text>
      </View>
      <View style={styles.cardMatch}>
        <View>
          <Image 
            source={require('../assets/chelsea.png')}
            style={styles.teamImg}
          />
          <Text style={styles.text}>Chelsea</Text>
        </View>
        <Image source={require('../assets/vs.png')} style={{width: 20, height : 20}}/>
        <View>
          <Image 
            source={require('../assets/chelsea.png')}
            style={styles.teamImg}
          />
          <Text style={styles.text}>Chelsea</Text>
        </View>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.calendar}>
        <View style={{flexDirection : 'row', gap : 5}}>
          <Icon name='calendar' color={WHITE} size={20} />
          <Text style={styles.text}>2020-10-20</Text>
        </View>
        <View style={{flexDirection : 'row', gap : 5}}>
          <Icon name='time' color={WHITE} size={20} />
          <Text style={styles.text}>2020-10-20</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    gap : 20,
    backgroundColor : 'black',
    padding : 20,
    borderRadius : 20,
  },
  cardMatch : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : 'center',
  },
  text : {
    color : WHITE
  },
  teamImg : {
    width : 60,
    height : 60,
  },
  hr : {
    marginLeft : 'auto',
    marginRight : 'auto',
    width : '100%',
    height : 1, 
    backgroundColor : WHITE
  },
  calendar : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
  }
})

export default MatcheComponent