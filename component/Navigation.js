import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pageSelector, pageGame, pageMyWords, pageTranslate } from '../features/navigationSlice'

const Navigation = () => {
  const page = useSelector(pageSelector)
  const dispatch = useDispatch()
  const getStyleSelect = namePage => {
    if (namePage === page) {
      return {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20,
      }
    }
    return {
      color: '#333',
      fontSize: 20,
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>dispatch(pageTranslate())}>
        <Text style={getStyleSelect('TRANSLATE')}>translate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dispatch(pageMyWords())}>
        <Text style={getStyleSelect('MYWORDS')}>my words</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dispatch(pageGame())}>
        <Text style={getStyleSelect('GAME')}>game</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
})