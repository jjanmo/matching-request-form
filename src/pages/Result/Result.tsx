import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '@store/root'
import { FormDataType } from '@store/slice/formSlice.type'
import { ResultDataType } from '@store/slice/resultSlice.type'
import * as CS from '../common.style'
import * as S from './Result.style'

export default function Result() {
  const formData = useSelector<RootState, FormDataType | undefined>((state) => state.form.data)
  const resultData = useSelector<RootState, ResultDataType>((state) => state.result.data, shallowEqual)

  if (!formData || !resultData) {
    return (
      <CS.Container>
        <S.EmptyWrapper>
          <S.EmptyNotice>매칭 요청서를 먼저 작성해주세요!</S.EmptyNotice>
          <S.HomeLink to="/">홈으로 가기</S.HomeLink>
        </S.EmptyWrapper>
      </CS.Container>
    )
  }

  return (
    <CS.Container>
      <CS.ContentWrapper>
        <S.HomeButton to="/">홈</S.HomeButton>

        <S.Title>
          <span>{formData?.title.slice(0, -2)}</span>
          <span className="form-id">({resultData?.formId})</span>
        </S.Title>

        {formData?.items.map((item, index) => (
          <S.Item key={item.itemId}>
            <S.Question $isLeft={index % 2 === 0}>{item.title}</S.Question>
            <S.SelectedOptions>
              {resultData?.items[item.itemId].map((optionId) => {
                const options = item.options
                const selectedOption = options.find((option) => option.id === optionId)
                return <S.Option key={optionId}>{selectedOption?.text} </S.Option>
              })}
            </S.SelectedOptions>
          </S.Item>
        ))}
      </CS.ContentWrapper>
    </CS.Container>
  )
}
