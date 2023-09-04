import { useEffect, useState } from 'react'
import { useAppDispatch } from '@store/root'
import { Item as ResultItem } from '@store/slice/formSlice.type'
import { resultActions } from '@store/slice/resultSlice'
import useAlreadySelected from '@hooks/useAlreadySelected'
import DownArrow from '@components/Icons/DownArrow'
import * as S from './Form.style'

export default function SelectForm({ title, options, itemId }: ResultItem) {
  const dispatch = useAppDispatch()
  const { isAlreadySelected, selectedOptions } = useAlreadySelected({ itemId })

  const [selected, setSelected] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, selectedIndex } = e.target
    setSelected(value)

    const selectedOption = options[selectedIndex - 1]
    dispatch(resultActions.changeSelectItem({ itemId, optionId: selectedOption.id }))
  }

  useEffect(() => {
    if (isAlreadySelected) {
      const selectedOptionId = selectedOptions.current[0]
      const selectedOption = options.find((option) => option.id === selectedOptionId)!
      setSelected(selectedOption.text)
    }
  }, [isAlreadySelected, options, selectedOptions])

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
