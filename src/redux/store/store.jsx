import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  datasSlice  from '../slice/datasSlise';

const rootReduser = combineReducers({
    datas:datasSlice,
})

const store = configureStore({
    reducer: rootReduser,
    
})
export default store