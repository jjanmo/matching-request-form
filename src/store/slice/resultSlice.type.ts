/**
 * @example
 * {
 *  currentItem : 2  // 현재 아이템 위치(아이템 배열의 인덱스)
 *  formId : 1
 *  items : {
 *    1006 : [4004, 4005] // [아이템아이디] : [... 선택한 옵션 아이디]
 *  }
 * }
 */
export interface ResultState {
  currentItem: number
  formId: number | null
  items: {
    [key: number]: number[]
  }
}
export interface PayloadCurrentItem {
  direction: 'prev' | 'next'
}

export interface PayloadInitialized {
  formId: number
  itemIds: number[]
}
export interface PayloadResultItem {
  optionId: number
  itemId: number
}
