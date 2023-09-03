import { useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '@store/root'
import { FormDataType, Item } from '@store/slice/formSlice.type'

export default function useWatch() {
  const currentItemIndex = useSelector<RootState, number>((state) => state.result.currentItemIndex, shallowEqual)
  const formData = useSelector<RootState, FormDataType | undefined>((state) => state.form.data, shallowEqual)

  const [currentItem, setCurrentItem] = useState<Item>()
  const totalItemLength = useRef<number>(0)

  useEffect(() => {
    if (formData) {
      totalItemLength.current = formData.items.length
    }
  }, [formData])

  useEffect(() => {
    if (formData) {
      setCurrentItem(formData.items[currentItemIndex])
    }
  }, [currentItemIndex, formData])

  return {
    currentItem,
    isFirst: currentItemIndex === 0,
    isLast: currentItemIndex === totalItemLength.current - 1,
  }
}
