import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
    <View>
      <Text style={styles.title}>Translate</Text>
      <View>
        <TextInput style={styles.input} placeholder='Nhập văn bản'
          value={sl}
          onChangeText={text => changeInput(text)}
        />
        <Text style={styles.destination}>{tl}</Text>
        <TouchableOpacity onPress={() => swap()}>
          <Text style={styles.change}>
            {vnToEn ? 'VIET NAM -> ENGLISH' : 'ENGLISH -> VIET NAM'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Translate

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#00BFFF",
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    fontSize: 25
  },
  destination: {
    fontSize: 20
  },
  change: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
})