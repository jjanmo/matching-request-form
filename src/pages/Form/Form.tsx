import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store/root'
import { fetchFormData } from '@/store/slice/formSlice'
import { FormState, MatchingType, Item } from '@/store/slice/formSlice.type'
import { ResultDataType } from '@/store/slice/resultSlice.type'
import Spinner from '@/components/Icons/Spinner'
import InputForm from '@/components/InputForm'
import * as S from './Form.style'

export default function Form() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const form = useSelector<RootState, FormState['data']>((state) => state.form.data, shallowEqual)
  const loading = useSelector<RootState, boolean>((state) => state.form.loading, shallowEqual)
  const items = useSelector<RootState, ResultDataType['items']>((state) => state.result.data.items)
  const [currentItem, setCurrentItem] = useState<Item>()

  useEffect(() => {
    const type = location.pathname.slice(1) as MatchingType
    dispatch(fetchFormData({ type }))
  }, [dispatch, location.pathname])

  useEffect(() => {
    const currentItemIndex = items.length
    setCurrentItem(form?.items[currentItemIndex])
  }, [items, form])

  return (
    <S.Container>
      {loading && (
        <S.SpinnerWrapper>
          <Spinner size={60} />
        </S.SpinnerWrapper>
      )}

      {!loading && form && (
        <S.ContentWrapper>
          <S.Title> {form.title}</S.Title>
          {currentItem?.formType === 'select' && <InputForm.SelectForm {...currentItem} />}
          {currentItem?.formType === 'checkbox' && <InputForm.CheckboxForm {...currentItem} />}
          <S.ButtonContainer>
            <button>이전</button>
            <button>다음</button>
          </S.ButtonContainer>
        </S.ContentWrapper>
      )}
    </S.Container>
  )
}
