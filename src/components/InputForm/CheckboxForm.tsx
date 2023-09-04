import { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@store/root'
import { Item as ResultItem } from '@store/slice/formSlice.type'
import { resultActions } from '@store/slice/resultSlice'
import { ResultDataType } from '@store/slice/resultSlice.type'
import CheckIcon from '@components/Icons/Check'
import * as S from './Form.style'

interface CheckedMap {
  [key: number]: boolean // [optionId] : 선택여부
}

export default function CheckboxForm({ title, options, itemId }: ResultItem) {
  const dispatch = useAppDispatch()
  const resultDataItems = useSelector<RootState, ResultDataType['items']>(
    (state) => state.result.data.items,
    shallowEqual
  )

  const initializedMap = options.reduce((acc, option) => ({ ...acc, [option.id]: false }), {})
  const [checkedMap, setCheckedMap] = useState<CheckedMap>(initializedMap)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setCheckedMap((prev) => ({
      ...prev,
      [id]: checked,
    }))

    dispatch(resultActions.changeCheckboxItem({ itemId, optionId: Number(id) }))
  }

  useEffect(() => {
    const currentCheckedOptions = resultDataItems[itemId]
    if (currentCheckedOptions?.length > 0) {
      const alreadyCheckedOptions = currentCheckedOptions.reduce((acc, optionId) => ({ ...acc, [optionId]: true }), {})
      setCheckedMap((prev) => ({
        ...prev,
        ...alreadyCheckedOptions,
      }))
    }
  }, [])

  return (
    <S.Container>
      <S.Question>{title}</S.Question>
      <S.OptionsContainer>
        {options.map((option) => (
          <S.Label key={option.id} htmlFor={String(option.id)} checked={checkedMap[option.id]}>
            <S.Checkbox checked={checkedMap[option.id]}>
              <CheckIcon size={25} />
            </S.Checkbox>
            <input
              id={String(option.id)}
              type="checkbox"
              name={String(itemId)}
              value={option.text}
              onChange={handleChange}
              checked={checkedMap[option.id]}
            />
            {option.text}
          </S.Label>
        ))}
      </S.OptionsContainer>
    </S.Container>
  )
}
