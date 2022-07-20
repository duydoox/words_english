import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "./features/wordsSlice";
import navigationReducer from "./features/navigationSlice";

const store = configureStore({
    reducer: {
        words: wordsReducer,
        pages: navigationReducer
    }
})

export default store