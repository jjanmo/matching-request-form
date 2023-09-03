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
    changeResultItem: (state, action: PayloadAction<PayloadResultItem>) => {
      const { itemId, optionId } = action.payload
      const selectedOptions = state.items[itemId]
      const finded = selectedOptions.indexOf(optionId)
      if (finded === -1) selectedOptions.push(optionId)
      else selectedOptions.splice(finded, 1)
    },
    resetResult: (state) => {
      state.currentItem = 0
      state.formId = null
      state.items = {}
    },
    // 현재 위치 수정
    // 응답 수정 -> input form을 변경할 때 마다 바로 바로 반영 => onChange로 반영
    // 최종 제출
    // 리셋 결과값 -> 결과페이지를 떠날 때
  },
})

export const resultActions = slice.actions
export default slice.reducer
