import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FormDataType, FormState, MatchingType } from './formSlice.type'
import { resultActions } from './resultSlice'
import { API } from '../ajax'

const initialState: FormState = {
  loading: false,
}

export const fetchFormData = createAsyncThunk<FormDataType, MatchingType>(
  '@form/fetchFormData',
  async (type, thunkAPI) => {
    const result = await API.get<FormDataType>(`/data/exam/mock/input_${type}.json`).then((res) => res.data)

    const data = {
      formId: result.formId,
      items: result.items.reduce((acc, item) => ({ ...acc, [item.itemId]: [] }), {}),
    }
    thunkAPI.dispatch(resultActions.initializeResultData(data))

    return result
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
