import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store/root'
import { fetchFormData } from '@store/slice/formSlice'
import { FormState, MatchingType, Item as CurrentItem } from '@store/slice/formSlice.type'
import { resultActions } from '@store/slice/resultSlice'
import Spinner from '@components/Icons/Spinner'
import InputForm from '@components/InputForm'
import * as S from './Form.style'
import Button from '@components/Button'

export default function Form() {
  const dispatch = useAppDispatch()
  const form = useSelector<RootState, FormState['data']>((state) => state.form.data, shallowEqual)
  const loading = useSelector<RootState, boolean>((state) => state.form.loading, shallowEqual)

  const location = useLocation()
  useEffect(() => {
    const type = location.pathname.slice(1) as MatchingType
    dispatch(fetchFormData(type))
  }, [dispatch, location.pathname])

  useEffect(() => {
    if (form) {
      const formId = form.formId
      const itemIds = form.items.map((item) => item.itemId)
      dispatch(resultActions.initializeResult({ formId, itemIds }))
    }
  }, [dispatch, form])

  const [currentItem, setCurrentItem] = useState<CurrentItem>()
  const currentItemIndex = useSelector<RootState, number>((state) => state.result.currentItem, shallowEqual)
  useEffect(() => {
    setCurrentItem(form?.items[currentItemIndex])
  }, [form, currentItemIndex])

  const handleClickPrev = () => {
    dispatch(resultActions.updateCurrentItem({ direction: 'prev' }))
  }
  const handleClickNext = () => {
    // TODO
    // 1) 유효성 검사 : 선택안했을때 alert
    // 2) 제출하기는 다른 로직 : 페이지 이동
    dispatch(resultActions.updateCurrentItem({ direction: 'next' }))
  }

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

          {currentItem?.formType === 'select' && <InputForm.SelectForm key={currentItem.itemId} {...currentItem} />}
          {currentItem?.formType === 'checkbox' && <InputForm.CheckboxForm key={currentItem.itemId} {...currentItem} />}

          <S.ButtonContainer>
            {currentItemIndex !== 0 && <Button onClick={handleClickPrev} text="이전" variant="outline" />}
            <Button
              onClick={handleClickNext}
              text={currentItemIndex === form.items.length - 1 ? '제출하기' : '다음'}
              variant="fill"
            />
          </S.ButtonContainer>
        </S.ContentWrapper>
      )}
    </S.Container>
  )
}
