export interface ResultDataType {
  formId: number | null
  items: {
    [key: number]: number[]
  }
}

/**
 * @example
 * {
 *  currentItemIndex : 2  // 현재 노출 중인 아이템(질문)의 인덱스
 *  data : {
 *    formId : 1
 *    items : {
 *      1006 : [4004, 4005] // [아이템아이디] : [... 선택한 옵션 아이디]
 *    }
 *  }
 * }
 */
export interface ResultState {
  currentItemIndex: number
  data: ResultDataType
}

export interface PayloadCurrentItem {
  direction: 'prev' | 'next'
}
export interface PayloadInitialized {
  formId: number
  items: {
    [key: number]: number[]
  }
}
export interface PayloadResultItem {
  optionId: number
  itemId: number
}
