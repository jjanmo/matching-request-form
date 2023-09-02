import { Item } from '@store/slice/formSlice.type'
import * as S from './InputForm.style'

function CheckboxForm({ title, options }: Item) {
  return (
    <S.Container>
      <S.Question>{title}</S.Question>
      <S.OptionsContainer>
        {options.map((option) => (
          <label htmlFor={String(option.id)}>
            <input key={option.id} id={String(option.id)} type="checkbox" value={option.text} />
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
