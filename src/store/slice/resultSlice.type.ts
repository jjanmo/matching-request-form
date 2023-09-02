interface Item {
  id: number
  title: string
  answer: string
}
export interface ResultDataType {
  id: number | null // formId
  items: Item[]
}

export interface ResultState {
  data: ResultDataType
}
