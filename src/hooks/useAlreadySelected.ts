import { useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '@store/root'
import { ResultDataType } from '@store/slice/resultSlice.type'

interface Props {
  itemId: number
}

export default function useAlreadySelected({ itemId }: Props) {
  const resultDataItems = useSelector<RootState, ResultDataType['items']>(
    (state) => state.result.data.items,
    shallowEqual
  )

  const [isAlreadySelected, setIsAlreadySelected] = useState<boolean>(false)
  const selectedOptions = useRef<number[]>([])

  useEffect(() => {
    const currentSelectedOptions = resultDataItems[itemId]
    setIsAlreadySelected(currentSelectedOptions?.length > 0)
    selectedOptions.current = currentSelectedOptions

    // 마운트 후 최초 확인
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isAlreadySelected,
    selectedOptions,
  }
}
