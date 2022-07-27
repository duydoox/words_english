import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseMemorize } from '../../features/wordsSlice'

const Play = ({words}) => {
    const dispatch = useDispatch()
    const [question, setQestion] = useState({ en: '', vi: '', id: null })
    const [answers, setAnswers] = useState([])
    const [isNum, setIsNum] = useState(0)

    const randomWord = (words) => {
        const len = words.length
        if (len > 0) {
            const index = Math.floor(Math.random() * len)
            return words[index]
        }
        // return {en: '', vi: '', id: null}
    }

    const createQuestion = () => {
        let word
        while (true) {
            word = randomWord(words)
            if (word.memorize >= Math.floor(Math.random() * 100)) {
                return { en: word.en, vi: word.vi, id: word.id }
            }
        }
    }

    const createAnswers = (words, question) => {
        const listAnswer = new Set([question.vi])
        while (listAnswer.size < words.length && listAnswer.size < 4) {
            listAnswer.add(randomWord(words).vi)
        }
        setAnswers([...listAnswer].sort(() => Math.random() - 0.5))
    }

    const createAll = () => {
        const quest = createQuestion()
        setQestion(quest)
        createAnswers(words, quest)
        setIsNum(0)
    }

    const colorAnswer = (text, index) => {
        if (isNum !== 0) {
            if (text === question.vi) return { backgroundColor: 'green' }
            else if (isNum === index + 1) return { backgroundColor: 'red' }
        }
        return {}
    }

    const clickAnswer = (text, index) => {
        if (isNum === 0) {
            if (text === question.vi) {
                dispatch(increaseMemorize({ id: question.id, inc: false }))
            }
            else {
                dispatch(increaseMemorize({ id: question.id, inc: true }))
            }
            setIsNum(index + 1)
        }
    }

    useEffect(() => {
        createAll()
    }, [])

    return (
        <View style={styles.play}>
            <View style={styles.questionBox}>
                <Text style={styles.question}>{question.en}</Text>
            </View>
            <View style={styles.answers}>
                {answers.map((text, index) => {
                    return <TouchableOpacity key={index} style={[styles.answer, colorAnswer(text, index)]}
                        onPress={() => clickAnswer(text, index)}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>{text}</Text>
                    </TouchableOpacity>
                })}
            </View>
            {
                isNum !== 0 &&
                <TouchableOpacity onPress={createAll} style={styles.nextBox}>
                    <Text style={styles.next}>next</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Play

const styles = StyleSheet.create({
    play: {
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    questionBox: {
        width: '70%',
        height: '20%',
        // backgroundColor: '#fff',
        marginBottom: 20,
        justifyContent: "center",
        alignItems: 'center'
    },
    question: {
        color: '#333',
        fontSize: 35,
        fontWeight: 'bold'
    },
    answers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '60%',
        // backgroundColor: '#fff'
    },
    answer: {
        margin: 5,
        width: '45%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 20
    },
    nextBox: {
        width: '80%',
        alignItems: 'flex-end'
    },
    next: {
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        backgroundColor: 'green',
        borderRadius: 10,
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center'
    }
})