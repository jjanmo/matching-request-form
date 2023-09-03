import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '@store/root'
import { FormDataType } from '@store/slice/formSlice.type'
import { ResultState } from '@store/slice/resultSlice.type'
import * as CS from '../common.style'

export default function Result() {
  const form = useSelector<RootState, FormDataType | undefined>((state) => state.form.data)
  const { formId, items } = useSelector<RootState, ResultState>((state) => state.result, shallowEqual)

  return (
    <CS.Container>
      <CS.ContentWrapper>
        <h1>
          <span>{form?.title}</span>에 대한 제출서 <span>({formId})</span>
        </h1>
        {form?.items.map((item) => (
          <div key={item.itemId}>
            <div>{item.title}</div>
            <div>
              {items[item.itemId].map((optionId) => {
                const options = item.options
                const selectedOption = options.find((option) => option.id === optionId)
                return <div key={optionId}>{selectedOption?.text}</div>
              })}
            </div>
          </div>
        ))}
      </CS.ContentWrapper>
    </CS.Container>
  )
}
