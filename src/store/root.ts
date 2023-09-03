import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
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
  middleware: (getDefaultMiddleware) => {
    const middleware = [...getDefaultMiddleware()]
    if (import.meta.env.NODE_ENV !== 'production') middleware.push(logger)
    return middleware
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
})
