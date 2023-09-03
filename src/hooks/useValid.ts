import { RootState } from '@store/root'
import { ResultDataType } from '@store/slice/resultSlice.type'
import { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import useWatch from './useWatch'

export default function useValid() {
  const { currentItem } = useWatch()
  const resultItems = useSelector<RootState, ResultDataType['items']>((state) => state.result.data.items, shallowEqual)

  const [isValid, setIsValid] = useState<boolean>(false)
  const [isAllValid, setIsAllValid] = useState<boolean>(false)

  useEffect(() => {
    if (currentItem) {
      const itemId = currentItem.itemId
      setIsValid(resultItems[itemId]?.length > 0)
    }
  }, [currentItem, resultItems])

  useEffect(() => {
    const resultItemsArray = Object.values(resultItems)
    const isValid = resultItemsArray.every((values) => values.length > 0)
    setIsAllValid(isValid)

    return () => {
      setIsAllValid(false)
    }
  }, [resultItems])

  return {
    isValid,
    isAllValid,
  }
}
