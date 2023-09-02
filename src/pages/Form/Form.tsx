import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store/root'
import { fetchFormData } from '@store/slice/formSlice'
import { FormState, MatchingType, Item } from '@store/slice/formSlice.type'
import Spinner from '@components/Icons/Spinner'
import InputForm from '@components/InputForm'
import * as S from './Form.style'
import Button from '@components/Button'

export default function Form() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const form = useSelector<RootState, FormState['data']>((state) => state.form.data, shallowEqual)
  const loading = useSelector<RootState, boolean>((state) => state.form.loading, shallowEqual)
  const currentItemIndex = useSelector<RootState, number>((state) => state.result.currentItem, shallowEqual)
  const [currentItem, setCurrentItem] = useState<Item>()

  useEffect(() => {
    const type = location.pathname.slice(1) as MatchingType
    dispatch(fetchFormData({ type }))
  }, [dispatch, location.pathname])

  useEffect(() => {
    setCurrentItem(form?.items[currentItemIndex])
  }, [form, currentItemIndex])

  const handleClickPrev = () => {}
  const handleClickNext = () => {}

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
            {currentItemIndex !== 0 && <Button onClick={handleClickPrev} text="이전" variant="outline" />}
            <Button
              onClick={handleClickNext}
              text={currentItemIndex === form.items.length ? '제출하기' : '다음'}
              variant="fill"
            />
          </S.ButtonContainer>
        </S.ContentWrapper>
      )}
    </S.Container>
  )
}
