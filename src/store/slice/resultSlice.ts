import { createSlice } from '@reduxjs/toolkit'
import { ResultState } from './resultSlice.type'

const initialState: ResultState = {
  data: {
    id: null,
    items: [],
  },
}

const slice = createSlice({
  name: '@result',
  initialState,
  reducers: {},
})

export const resultActions = slice.actions
export default slice.reducer
