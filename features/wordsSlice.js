import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'wordsState',
    initialState: {
        listWords: [
            { en: 'hello', vn: 'xin chào', memorized: false, isShow: false }
        ],
        fillterStatus: 'SHOW_ALL',
        isAdding: false
    },
    reducers: {
        addWord: (state, action) => {
            state.listWords.push(action.payload)
        }
    }
})

export const { addWord } = slice.actions

export default wordsReducer = slice.reducer