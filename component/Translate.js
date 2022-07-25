import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import translate from '../api/translate'

const Translate = () => {
  const [vnToEn, setVnToEn] = useState(false)
  const [sl, setSl] = useState('')
  const [tl, setTl] = useState('')

  useEffect(() => {
    setSl(tl)
  }, [vnToEn])

  useEffect(() => {
    (async () => {
      if (sl.trim() === '') {
        setTl('')
      }
      else {
        try {
          const res = await translate(vnToEn, sl)
          setTl(res)
        }
        catch (err) {
          setTl('không có kết nối mạng')
        }
      }
    })()
  }, [sl])

  const changeInput = (text) => {
    setSl(text)
  }
  const swap = () => {
    setVnToEn(!vnToEn)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate</Text>
      <ScrollView>
        <View>
          <TextInput style={styles.input} placeholder='Nhập văn bản'
            value={sl}
            onChangeText={text => changeInput(text)}
          />
          <Text style={styles.destination}>{tl}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => swap()}>
        <Text style={styles.change}>
          {vnToEn ? 'VIET NAM -> ENGLISH' : 'ENGLISH -> VIET NAM'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Translate

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // backgroundColor: '#7FFF00'
  },
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
  input: {
    fontSize: 25
  },
  destination: {
    fontSize: 20,
    color: '#00BFFF'
  },
  change: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
})