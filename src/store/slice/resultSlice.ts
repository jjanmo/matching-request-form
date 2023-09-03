import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResultState, PayloadCurrentItem, PayloadResultItem, PayloadInitialized } from './resultSlice.type'

const initialState: ResultState = {
  currentItemIndex: 0,
  data: {
    formId: null,
    items: {},
  },
}

const slice = createSlice({
  name: '@result',
  initialState,
  reducers: {
    initializeResultData: (state, action: PayloadAction<PayloadInitialized>) => {
      const { formId, items } = action.payload
      state.data.formId = formId
      state.data.items = items
    },
    resetResultData: (state) => {
      state.currentItemIndex = 0
      state.data = {
        formId: null,
        items: {},
      }
    },

    updateCurrentItem: (state, action: PayloadAction<PayloadCurrentItem>) => {
      state.currentItemIndex += action.payload.direction === 'next' ? 1 : -1
    },

    changeCheckboxItem: (state, action: PayloadAction<PayloadResultItem>) => {
      const { itemId, optionId } = action.payload
      const checkedOptions = state.data.items[itemId]
      const findedOptionIndex = checkedOptions.indexOf(optionId)

      if (findedOptionIndex === -1) checkedOptions.push(optionId)
      else checkedOptions.splice(findedOptionIndex, 1)
    },
    changeSelectItem: (state, action: PayloadAction<PayloadResultItem>) => {
      const { itemId, optionId } = action.payload
      state.data.items[itemId] = [optionId]
    },
  },
})

export const resultActions = slice.actions
export default slice.reducer
