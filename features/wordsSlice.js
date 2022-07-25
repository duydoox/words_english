import { createSlice, nanoid } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'wordsState',
    initialState: {
        listWords: [
            { id: 1, en: 'hello', vi: 'xin chào', memorize: 100, category: 'adjective', classify: '', note: ''},
            { id: 2, en: 'one', vi: 'một', memorize: 75, category: 'nouns', classify: '', note: ''},
            { id: 3, en: 'eat', vi: 'ăn', memorize: 40, category: 'verb', classify: '', note: ''},
            { id: 4, en: 'one', vi: 'một', memorize: 74, category: 'nouns', classify: '', note: 'haha haha haha haha haha haha haha haha haha haha haha haha haha haha haha'},
            { id: 5, en: 'one', vi: 'một', memorize: 80, category: 'nouns', classify: '', note: 'haha'},
            { id: 6, en: 'one', vi: 'một', memorize: 20, category: 'nouns', classify: '', note: ''},
            { id: 7, en: 'one', vi: 'một', memorize: 10, category: 'nouns', classify: '', note: ''},
            { id: 8, en: 'one', vi: 'một', memorize: 50, category: 'nouns', classify: '', note: ''},
            { id: 9, en: 'one', vi: 'một', memorize: 90, category: 'nouns', classify: '', note: ''},
            { id: 10, en: 'one', vi: 'một', memorize: 30, category: 'nouns', classify: '', note: ''},
            { id: 11, en: 'one', vi: 'một', memorize: 65, category: 'nouns', classify: '', note: ''},
        ]
    },
    reducers: {
        addWord: {
            reducer(state, action){
                state.listWords.push(action.payload)
            },
            prepare(word){
                return {
                    payload: {
                        id: nanoid(),
                        memorize: 100,
                        category: '',
                        classify: '',
                        note: '',
                        ...word,
                    }
                }
            }
        },
        deleteWord(state, action){
            state.listWords = state.listWords.filter((word)=> word.id !== action.payload)
        }
    }
})

export const { addWord, deleteWord } = slice.actions
export const wordsSelector = state => state.words.listWords

export default wordsReducer = slice.reducer