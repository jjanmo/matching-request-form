import { createSlice } from '@reduxjs/toolkit'
import { ResultState } from './resultSlice.type'

const initialState: ResultState = {
  currentItem: 1,
  data: {
    id: null,
    items: [],
  },
}

const slice = createSlice({
  name: '@result',
  initialState,
  reducers: {
    // 결과값 추가(+수정)
    // 최종 제출
    // 리셋 결과값 -> 결과페이지를 떠날때
  },
})

export const resultActions = slice.actions
export default slice.reducer
