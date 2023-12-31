import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store/root'
import { fetchFormData } from '@store/slice/formSlice'
import { MatchingType } from '@store/slice/formSlice.type'
import { resultActions } from '@store/slice/resultSlice'
import useValid from '@hooks/useValid'
import useWatch from '@hooks/useWatch'
import Spinner from '@components/Icons/Spinner'
import { CheckboxForm, SelectForm } from '@components/InputForm'
import { BottomButton } from '@components/Buttons'
import * as CS from '../common.style'
import * as S from './Form.style'

export default function Form() {
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const formTitle = useSelector<RootState, string | undefined>((state) => state.form.data?.title, shallowEqual)
  const loading = useSelector<RootState, boolean>((state) => state.form.loading, shallowEqual)

  const { isValid, isAllValid } = useValid()
  const { currentItem, isFirst, isLast } = useWatch()

  useEffect(() => {
    const type = location.pathname.slice(1) as MatchingType
    dispatch(fetchFormData(type))
  }, [dispatch, location.pathname])

  const handleClickPrev = () => {
    dispatch(resultActions.updateCurrentItem({ direction: 'prev' }))
  }
  const handleClickNext = () => {
    if (!isValid) return alert('옵션을 선택해주세요')
    if (isLast && isAllValid) return navigate('/result')

    dispatch(resultActions.updateCurrentItem({ direction: 'next' }))
  }

  return (
    <CS.Container>
      {loading && (
        <S.SpinnerWrapper>
          <Spinner size={60} />
        </S.SpinnerWrapper>
      )}

      {!loading && (
        <CS.ContentWrapper>
          <S.Title>{formTitle}</S.Title>

          {currentItem?.formType === 'select' && <SelectForm key={currentItem.itemId} {...currentItem} />}
          {currentItem?.formType === 'checkbox' && <CheckboxForm key={currentItem.itemId} {...currentItem} />}

          <S.ButtonContainer>
            {!isFirst && <BottomButton onClick={handleClickPrev} text="이전" variant="outline" />}
            <BottomButton onClick={handleClickNext} text={isLast ? '제출하기' : '다음'} variant="fill" />
          </S.ButtonContainer>
        </CS.ContentWrapper>
      )}
    </CS.Container>
  )
}
