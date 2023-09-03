import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store/root'
import { fetchFormData } from '@store/slice/formSlice'
import { MatchingType, Item as CurrentItem, FormDataType } from '@store/slice/formSlice.type'
import { resultActions } from '@store/slice/resultSlice'
import useIsValid from '@hooks/useIsValid'
import Spinner from '@components/Icons/Spinner'
import InputForm from '@components/InputForm'
import Button from '@components/Button'
import * as S from './Form.style'

export default function Form() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const formData = useSelector<RootState, FormDataType | undefined>((state) => state.form.data, shallowEqual)
  const loading = useSelector<RootState, boolean>((state) => state.form.loading, shallowEqual)
  const currentItemIndex = useSelector<RootState, number>((state) => state.result.currentItem, shallowEqual)
  const { isValid, isAllValid } = useIsValid()
  const [currentItem, setCurrentItem] = useState<CurrentItem>()

  useEffect(() => {
    const type = location.pathname.slice(1) as MatchingType
    dispatch(fetchFormData(type))
  }, [dispatch, location.pathname])

  useEffect(() => {
    if (formData) {
      const formId = formData.formId
      const itemIds = formData.items.map((item) => item.itemId)
      dispatch(resultActions.initializeResult({ formId, itemIds }))
    }
  }, [dispatch, formData])

  useEffect(() => {
    setCurrentItem(formData?.items[currentItemIndex])
  }, [formData, currentItemIndex])

  const handleClickPrev = () => {
    dispatch(resultActions.updateCurrentItem({ direction: 'prev' }))
  }
  const handleClickNext = () => {
    if (!isValid) return alert('값을 입력해 주세요.')
    if (formData && currentItemIndex === formData.items.length - 1 && isAllValid) return navigate('/result')

    dispatch(resultActions.updateCurrentItem({ direction: 'next' }))
  }

  return (
    <S.Container>
      {loading && (
        <S.SpinnerWrapper>
          <Spinner size={60} />
        </S.SpinnerWrapper>
      )}

      {!loading && formData && (
        <S.ContentWrapper>
          <S.Title>{formData.title}</S.Title>

          {currentItem?.formType === 'select' && <InputForm.SelectForm key={currentItem.itemId} {...currentItem} />}
          {currentItem?.formType === 'checkbox' && <InputForm.CheckboxForm key={currentItem.itemId} {...currentItem} />}

          <S.ButtonContainer>
            {currentItemIndex !== 0 && <Button onClick={handleClickPrev} text="이전" variant="outline" />}
            <Button
              onClick={handleClickNext}
              text={currentItemIndex === formData.items.length - 1 ? '제출하기' : '다음'}
              variant="fill"
            />
          </S.ButtonContainer>
        </S.ContentWrapper>
      )}
    </S.Container>
  )
}
