import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Play from './Play'
import { useSelector } from 'react-redux'
import { wordsSelector } from '../../features/wordsSlice'

const Game = () => {
  const [isPlay, setIsPlay] = useState(false)
  const words = useSelector(wordsSelector)
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Game</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isPlay ?
          words.length > 0 ?
            <Play words={words} /> :
            <Text style={{fontSize: 17}}>Bạn không có từ nào</Text> :
          <TouchableOpacity
            onPress={() => setIsPlay(true)}>
            <Text style={styles.start}>Start</Text>
          </TouchableOpacity>}
      </View>
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: "#333",
    fontWeight: 'bold',
    marginBottom: 30,
    padding: 10,
    height: 70,
    lineHeight: 45,
    alignItems: 'center',
    borderBottomColor: '#228B22',
    borderBottomWidth: 1
  },
  start: {
    fontSize: 25,
    color: "#333",
    fontWeight: 'bold',
  }
})