import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListWords = () => {
  return (
    <View style={styles.container}>
      <Text>ListWords</Text>
    </View>
  )
}

export default ListWords

const styles = StyleSheet.create({
    container: {
        flex: 10
    },
})