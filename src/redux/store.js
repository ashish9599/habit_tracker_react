import  { configureStore } from '@reduxjs/toolkit'
import { habitReducer } from './reducer/habbitReducer'

export const store=configureStore({
    reducer:{habitReducer}
})

export const habitSelector=(store)=>store.habitReducer.habit; 