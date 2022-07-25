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
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      }
    }
    return {
      color: '#333',
      fontSize: 18,
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(pageTranslate())}>
        <Text style={getStyleSelect('TRANSLATE')}>Translate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(pageMyWords())}>
        <Text style={getStyleSelect('MYWORDS')}>My Words</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(pageGame())}>
        <Text style={getStyleSelect('GAME')}>Game</Text>
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
    flexDirection: 'row',
    backgroundColor: '#228B22',
  },
  tabo: {
    // backgroundColor: '#fff',
    height: '100%',
  }
})