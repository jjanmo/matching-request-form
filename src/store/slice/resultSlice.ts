import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResultState, PayloadCurrentItem, PayloadResultItem, PayloadInitialized } from './resultSlice.type'

const initialState: ResultState = {
  currentItem: 0,
  formId: null,
  items: {},
}

const slice = createSlice({
  name: '@result',
  initialState,
  reducers: {
    initializeResult: (state, action: PayloadAction<PayloadInitialized>) => {
      state.formId = action.payload.formId
      state.items = action.payload.itemIds.reduce((acc, id) => ({ ...acc, [id]: [] }), {})
    },
    updateCurrentItem: (state, action: PayloadAction<PayloadCurrentItem>) => {
      state.currentItem += action.payload.direction === 'next' ? 1 : -1
    },
    changeCheckboxItem: (state, action: PayloadAction<PayloadResultItem>) => {
      const { itemId, optionId } = action.payload
      const selectedOptions = state.items[itemId]
      const finded = selectedOptions.indexOf(optionId)

      if (finded === -1) selectedOptions.push(optionId)
      else selectedOptions.splice(finded, 1)
    },
    changeSelectItem: (state, action: PayloadAction<PayloadResultItem>) => {
      const { itemId, optionId } = action.payload
      state.items[itemId] = [optionId]
    },
    resetResult: (state) => {
      state.currentItem = 0
      state.formId = null
      state.items = {}
    },
  },
})

export const resultActions = slice.actions
export default slice.reducer
