export type MatchingType = 'lesson' | 'clean'
export type FormType = 'checkbox' | 'select'

interface Option {
  id: number
  text: string
}
export interface Item {
  formType: FormType
  itemId: number
  options: Option[]
  title: string
}
export interface FormDataType {
  formId: number
  title: string
  items: Item[]
}

export interface FormState {
  loading: boolean
  data?: FormDataType
}
