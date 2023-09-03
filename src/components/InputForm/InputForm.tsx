import { Item } from '@store/slice/formSlice.type'
import * as S from './InputForm.style'
import { useAppDispatch } from '@store/root'
import { resultActions } from '@store/slice/resultSlice'

function CheckboxForm({ title, options, itemId }: Item) {
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target
    dispatch(resultActions.changeResultItem({ itemId, optionId: Number(id) }))
  }

  return (
    <S.Container>
      <S.Question>{title}</S.Question>
      <S.OptionsContainer>
        {options.map((option) => (
          <label key={option.id} htmlFor={String(option.id)}>
            <S.Checkbox />
            <input
              id={String(option.id)}
              type="checkbox"
              name={String(itemId)}
              value={option.text}
              onChange={handleChange}
            />
            {option.text}
          </label>
        ))}
      </S.OptionsContainer>
    </S.Container>
  )
}

function SelectForm({ title, options }: Item) {
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
