import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import formReducer from './slice/formSlice'
import resultReducer from './slice/resultSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

const rootReducer = combineReducers({
  form: formReducer,
  result: resultReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.NODE_ENV !== 'production',
})
