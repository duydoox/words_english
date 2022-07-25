import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'switchPage',
    initialState: {
        page: 'TRANSLATE',
        isAddWord: false
    },
    reducers: {
        pageTranslate: (state) => {
            state.page = 'TRANSLATE'
        },
        pageMyWords: (state) => {
            state.page = 'MYWORDS'
        },
        pageGame: (state) => {
            state.page = 'GAME'
        },
        toggleAddWord: (state, actions) => {
            state.isAddWord = actions.payload
        }
    }
})

export const {pageGame, pageMyWords, pageTranslate, toggleAddWord} = slice.actions
export const pageSelector = state => {
    return state.pages.page
}
export const selecIsAddWord = state => state.pages.isAddWord

export default navigationReducer = slice.reducer