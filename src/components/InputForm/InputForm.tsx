import { useState } from 'react'
import { Item as ResultItem } from '@store/slice/formSlice.type'
import { useAppDispatch } from '@store/root'
import { resultActions } from '@store/slice/resultSlice'
import CheckIcon from '@components/Icons/Check'
import * as S from './InputForm.style'
import DownArrow from '@components/Icons/DownArrow'

interface CheckedArray {
  [key: number]: boolean
}

function CheckboxForm({ title, options, itemId }: ResultItem) {
  const dispatch = useAppDispatch()

  const initializedArray = options.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {})
  const [checkedArray, setCheckedArray] = useState<CheckedArray>(initializedArray)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    dispatch(resultActions.changeCheckboxItem({ itemId, optionId: Number(id) }))

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

function SelectForm({ title, options, itemId }: ResultItem) {
  const dispatch = useAppDispatch()
  const [selected, setSelected] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, selectedIndex } = e.target
    setSelected(value)

    const selectedOption = options[selectedIndex - 1]
    dispatch(resultActions.changeSelectItem({ itemId, optionId: selectedOption.id }))
  }

  return (
    <S.Container>
      <S.Question>{title}</S.Question>
      <S.OptionsContainer>
        <S.Select onChange={handleChange} value={selected} selected={!!selected}>
          <option disabled value="">
            선택해주세요
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.text}>
              {option.text}
            </option>
          ))}
        </S.Select>
        <S.IconWrapper>
          <DownArrow size={20} />
        </S.IconWrapper>
      </S.OptionsContainer>
    </S.Container>
  )
}

const InputForm = {
  CheckboxForm,
  SelectForm,
}

export default InputForm
