import { StyleSheet, Text, Animated, Dimensions, TouchableOpacity, TextInput, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleAddWord } from '../features/navigationSlice'
import { addWord } from '../features/wordsSlice'

const AddWord = () => {
  const dispatch = useDispatch()
  const { width } = Dimensions.get('window')
  const [anim] = useState((new Animated.Value(width)))
  const [word, setWord] = useState({
    en: '',
    vi: '',
    note: '',
    category: ''
  })
  const [isShowCategory, setIsShowCategory] = useState(false)

  const categorys = ['nouns', 'verb', 'adjective', 'adverb', 'prepositions', 'determiner', 'pronouns', 'conjunctions']

  const back = () => {
    Animated.timing(anim, {
      toValue: width,
      duration: 200,
      useNativeDriver: false
    }).start()
    setTimeout(() => {
      dispatch(toggleAddWord(false))
    }, 200)
  }

  const submit = () => {
    if (word.en.trim() !== '' || word.vi.trim() !== '') {
      dispatch(addWord(word)),
        back()
    }
  }

  const handleClickCategory = (item) => {
    setWord({...word, category: item})
    setIsShowCategory(false)
  }

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start()
  }, [])
  return (
    <Animated.View style={[styles.component, { marginLeft: anim }]}>
      <TouchableOpacity onPress={() => back()}>
        <Text>back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>AddWord</Text>
      <TextInput placeholder='english' style={[styles.input]}
        value={word.en} onChangeText={text => setWord({ ...word, en: text })} />
      <TextInput placeholder='vietnam' style={[styles.input]}
        value={word.vi} onChangeText={text => setWord({ ...word, vi: text })} />
      <TextInput placeholder='note' style={[styles.input]}
        value={word.note} onChangeText={text => setWord({ ...word, note: text })} />

      <View>
        <TouchableOpacity onPress={() => setIsShowCategory(!isShowCategory)}>
          <Text>{word.category === '' ? 'category' : word.category}</Text>
        </TouchableOpacity>
        {isShowCategory &&
          <View>
            <FlatList
              data={categorys}
              renderItem={({ item }) =>
                <Text onPress={()=>handleClickCategory(item)}>
                  {item}
                </Text>}
            />
          </View>}
      </View>

      <TouchableOpacity style={{ alignItems: 'center' }} onPress={submit}>
        <Text style={styles.btnAdd}>add</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default AddWord

const styles = StyleSheet.create({
  component: {
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 20,
    width: '98%'
  },
  enInput: {
  },
  viInput: {
  },
  note: {
  },
  btnAdd: {
    fontSize: 18
  }
})