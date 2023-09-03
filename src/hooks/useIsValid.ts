import { RootState } from '@store/root'
import { Item as FormDataItem } from '@store/slice/formSlice.type'
import { ResultState } from '@store/slice/resultSlice.type'
import { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export default function useIsValid() {
  const formDataItems = useSelector<RootState, FormDataItem[] | undefined>(
    (state) => state.form.data?.items,
    shallowEqual
  )
  const currentItem = useSelector<RootState, number>((state) => state.result.currentItem, shallowEqual)
  const resultItems = useSelector<RootState, ResultState['items']>((state) => state.result.items, shallowEqual)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [isAllValid, setIsAllValid] = useState<boolean>(false)

  useEffect(() => {
    if (formDataItems) {
      const itemId = formDataItems[currentItem].itemId
      const isValid = resultItems[itemId]?.length > 0
      setIsValid(isValid)
    }
  }, [currentItem, formDataItems, resultItems])

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
