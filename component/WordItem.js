import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { deleteWord } from '../features/wordsSlice'
import { useDispatch } from 'react-redux'

const WordItem = ({ item }) => {
    const dispatch = useDispatch()
    const [isShowAll, setIsShowAll] = useState(false)
    const title = (text) => (text[0].toUpperCase() + text.slice(1))

    const waningMemori = (memorize) => {
        if (memorize >= 75) {
            return { borderLeftColor: '#FF7F50' }
        }
        else if (memorize >= 40) {
            return { borderLeftColor: '#FFCC66' }
        }
    }
    const handleDelete = () => {
        Alert.alert(
            'Warning',
            'Do you want delete this word?',
            [
            { text: 'Cancel' },
            {
                text: 'Ok',
                onPress: () => {
                    dispatch(deleteWord(item.id))
                }
            }
            ]
        )
    }
    return (
        <TouchableOpacity style={[styles.container, waningMemori(item.memorize)]}
            onPress={() => {
                setIsShowAll(!isShowAll)
            }}>
            <View style={styles.en}>
                <Text style={styles.text}>{title(item.en)}</Text>
                {item.category !== '' &&
                    <Text style={[styles.category, styles.text]}> ({item.category.slice(0, 3)})</Text>}
            </View>
            <Text style={styles.text}>{title(item.vi)}</Text>
            {isShowAll &&
                <View>
                    {item.note.trim() !== '' &&
                        <View style={styles.note}>
                            <Text style={{ flex: 1.3 }}>Note: </Text>
                            <Text style={{ flex: 8 }}>{item.note}</Text>
                        </View>
                    }
                    <View style={styles.more}>
                        <TouchableOpacity>
                            <Text style={[styles.btn, { borderColor: '#00BFFF', color: '#00BFFF' }]}>change</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete}>
                            <Text style={[styles.btn, { borderColor: '#FF7F50', color: '#FF7F50' }]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>}
        </TouchableOpacity>
    )
}

export default WordItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 7,
        borderLeftWidth: 4,
        borderLeftColor: '#00BFFF',
        margin: 3
    },
    text: {
        fontSize: 18,
        fontWeight: '500'
    },
    en: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    note: {
        flexDirection: 'row'
    },
    more: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    btn: {
        marginHorizontal: 5,
        fontSize: 15,
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 3
    }
})