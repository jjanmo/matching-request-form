import { RootState, useAppDispatch } from '@/store/root'
import { fetchFormData } from '@/store/slice/formSlice'
import { FormState, MatchingType } from '@/store/slice/formSlice.type'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function Form() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const form = useSelector<RootState, FormState['data']>((state) => state.form.data, shallowEqual)
  const loading = useSelector<RootState, boolean>((state) => state.form.loading, shallowEqual)

  useEffect(() => {
    const type = location.pathname.slice(1) as MatchingType
    dispatch(fetchFormData({ type }))
  }, [dispatch, location.pathname])

  return (
    <div>
      {loading && <div>로딩중...</div>}

      {!loading && form && (
        <div>
          <div>{form.title}</div>
        </div>
      )}
    </div>
  )
}
