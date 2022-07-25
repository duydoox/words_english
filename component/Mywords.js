import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import ListWords from './ListWords'

const Mywords = () => {
  return (
    <View style={styles.component}>
      <Header/>
      <ListWords/>
    </View>
  )
}

export default Mywords

const styles = StyleSheet.create({
  component:{
    flex: 1
  }
})