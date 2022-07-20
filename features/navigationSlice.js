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
        }
    }
})

export const {pageGame, pageMyWords, pageTranslate} = slice.actions
export const pageSelector = state => {
    return state.pages.page
}

export default navigationReducer = slice.reducer