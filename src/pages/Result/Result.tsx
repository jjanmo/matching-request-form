import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@store/root'
import { FormDataType } from '@store/slice/formSlice.type'
import { ResultDataType } from '@store/slice/resultSlice.type'
import * as CS from '../common.style'
import { resultActions } from '@store/slice/resultSlice'
import { useEffect } from 'react'

export default function Result() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formData = useSelector<RootState, FormDataType | undefined>((state) => state.form.data)
  const resultData = useSelector<RootState, ResultDataType>((state) => state.result.data, shallowEqual)
  const { formId, items: resultItems } = resultData

  useEffect(() => {
    return () => {
      dispatch(resultActions.resetResultData())
    }
  }, [dispatch])

  if (!formData || !resultData) {
    return (
      <div>
        매칭 요청서를 먼저 작성해주세요!
        <button onClick={() => navigate('/')}>홈</button>
      </div>
    )
  }

  return (
    <CS.Container>
      <CS.ContentWrapper>
        <button onClick={() => navigate('/')}>홈</button>

        <h1>
          <span>{formData?.title}</span>에 대한 제출서 <span>({formId})</span>
        </h1>
        {formData?.items.map((item) => (
          <div key={item.itemId}>
            <div>{item.title}</div>
            <div>
              {resultItems[item.itemId].map((optionId) => {
                const options = item.options
                const selectedOption = options.find((option) => option.id === optionId)
                return <span key={optionId}>{selectedOption?.text} </span>
              })}
            </div>
          </div>
        ))}
      </CS.ContentWrapper>
    </CS.Container>
  )
}
