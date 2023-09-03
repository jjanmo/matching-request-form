import { useState } from 'react'
import { Item as ResultItem } from '@store/slice/formSlice.type'
import { useAppDispatch } from '@store/root'
import { resultActions } from '@store/slice/resultSlice'
import CheckIcon from '@components/Icons/Check'
import * as S from './InputForm.style'

interface CheckedArray {
  [key: number]: boolean
}

function CheckboxForm({ title, options, itemId }: ResultItem) {
  const dispatch = useAppDispatch()
  const initializedArray = options.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {})
  const [checkedArray, setCheckedArray] = useState<CheckedArray>(initializedArray)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    dispatch(resultActions.changeResultItem({ itemId, optionId: Number(id) }))

    setCheckedArray((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  return (
    <S.Container>
      <S.Question>{title}</S.Question>
      <S.OptionsContainer>
        {options.map((option) => (
          <S.Label key={option.id} htmlFor={String(option.id)} checked={checkedArray[option.id]}>
            <S.Checkbox checked={checkedArray[option.id]}>
              <CheckIcon size={25} />
            </S.Checkbox>
            <input
              id={String(option.id)}
              type="checkbox"
              name={String(itemId)}
              value={option.text}
              onChange={handleChange}
            />
            {option.text}
          </S.Label>
        ))}
      </S.OptionsContainer>
    </S.Container>
  )
}

function SelectForm({ title, options }: ResultItem) {
  return (
    <S.Container>
      <S.Question>{title}</S.Question>
      <S.OptionsContainer>
        <select>
          <option value="">선택해주세요</option>
          {options.map((option) => (
            <option key={option.id} value={option.text}>
              {option.text}
            </option>
          ))}
        </select>
      </S.OptionsContainer>
    </S.Container>
  )
}

const InputForm = {
  CheckboxForm,
  SelectForm,
}

export default InputForm
