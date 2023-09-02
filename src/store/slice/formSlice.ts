import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FormDataType, FormState, MatchingType } from './formSlice.type'
import { API } from '../ajax'

const initialState: FormState = {
  loading: false,
  data: null,
}

export const fetchFormData = createAsyncThunk<FormDataType, { type: MatchingType }>(
  '@form/fetchFormData',
  async ({ type }) => {
    const data = API.get(`/data/exam/mock/input_${type}.json`).then((res) => res.data)
    return data
  }
)

const slice = createSlice({
  name: '@form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFormData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchFormData.fulfilled, (state, action: PayloadAction<FormDataType>) => {
        state.loading = false
        state.data = action.payload
      })
  },
})

export const formActions = slice.actions
export default slice.reducer
