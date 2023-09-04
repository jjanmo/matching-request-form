import { RootState } from '@store/root'
import { FormDataType } from '@store/slice/formSlice.type'
import { ResultDataType } from '@store/slice/resultSlice.type'
import { useCallback, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

interface DownloadData {
  id: number // formId
  items: {
    id: number // itemId
    answer: string
  }[]
}

export default function useDownload() {
  const formData = useSelector<RootState, FormDataType | undefined>((state) => state.form.data, shallowEqual)
  const resultData = useSelector<RootState, ResultDataType>((state) => state.result.data, shallowEqual)

  const [downloadData, setDownloadData] = useState<DownloadData>()

  useEffect(() => {
    if (formData) {
      const formId = formData.formId
      const items = formData.items.map((item) => {
        const itemId = item.itemId
        const options = item.options
        const selectedOptionsMap = resultData.items[itemId]
        const answer = options
          .filter((option) => selectedOptionsMap.includes(option.id))
          .map((option) => option.text)
          .join(', ')

        return {
          id: itemId,
          answer,
        }
      })

      setDownloadData({
        id: formId,
        items,
      })
    }
  }, [formData, resultData.items])

  const saveToData = useCallback(() => {
    const blob = new Blob([JSON.stringify(downloadData)], { type: 'application/json' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = 'output.json'
    link.click()
  }, [downloadData])

  return {
    saveToData,
  }
}
