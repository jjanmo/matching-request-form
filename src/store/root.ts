import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import formReducer from './slice/formSlice'
import resultReducer from './slice/resultSlice'

const rootReducer = combineReducers({
  form: formReducer,
  result: resultReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.NODE_ENV !== 'production') return getDefaultMiddleware().concat(logger)
    return getDefaultMiddleware()
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
