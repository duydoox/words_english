import { createSlice, nanoid , createAsyncThunk} from "@reduxjs/toolkit"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const getWords = createAsyncThunk('words/getWords', async ()=> {
    try{
        const wordsJson = await AsyncStorage.getItem('words')
        if(wordsJson) {
            return JSON.parse(wordsJson)
        }
    }catch(err){
        console.log(err)
    }
    return [
        { id: 1, en: 'hello', vi: 'xin chào', memorize: 100, category: 'nouns', classify: '', note: ''},
        { id: 2, en: 'one', vi: 'một', memorize: 75, category: 'nouns', classify: '', note: ''},
        { id: 3, en: 'eat', vi: 'ăn', memorize: 40, category: 'verb', classify: '', note: ''},
        { id: 4, en: 'two', vi: 'một', memorize: 74, category: 'nouns', classify: '', note: 'haha haha haha haha haha haha haha haha haha haha haha haha haha haha haha'},
        { id: 5, en: 'three', vi: 'một', memorize: 80, category: 'nouns', classify: '', note: 'haha'},
    ]
})

const saveWords = async (items) => {
    try{
        await AsyncStorage.setItem('words', JSON.stringify(items))
    }catch(err){
        console.log(err)
    }
}

const slice = createSlice({
    name: 'words',
    initialState: {
        listWords: []
    },
    reducers: {
        addWord: {
            reducer(state, action){
                state.listWords.push(action.payload)
                saveWords(state.listWords)
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
            saveWords(state.listWords)
        },
        increaseMemorize(state, action){
            state.listWords.map(word=>{
                if(word.id===action.payload.id){
                    if(action.payload.inc){
                        word.memorize = 1.2*word.memorize <=100 ? 1.2*word.memorize : 100
                    }
                    else{
                        word.memorize = 0.95*word.memorize >=5 ? 0.95*word.memorize : 5
                    }
                }
            })
            saveWords(state.listWords)
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getWords.pending, (state, action)=>{
            console.log('loading')
        })
        .addCase(getWords.fulfilled, (state, action) => {
            state.listWords = action.payload
        })
    }
})

export const { addWord, deleteWord, increaseMemorize } = slice.actions
export const wordsSelector = state => state.words.listWords

export default wordsReducer = slice.reducer