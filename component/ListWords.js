import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { wordsSelector } from '../features/wordsSlice'
import WordItem from './WordItem'

const ListWords = () => {
  const arrWords = useSelector(wordsSelector)
  const reserve = (arr) => {
    const reserveArr = []
    for(let i = arr.length - 1; i>=0; i--){
      reserveArr.push(arr[i])
    }
    return reserveArr
  }
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator = {false} 
        data={reserve(arrWords)}
        renderItem={({ item }) => <WordItem key={item.id} item={item}/>}
      />
    </View>
  )
}

export default ListWords

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})