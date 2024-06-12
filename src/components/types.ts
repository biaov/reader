/**
 * page-guide 组件
 */
export namespace PageGuide {
  export interface Guide {
    icon: {
      url: string
      x: number
      y: number
      w: number
      h: number
    }
    text: {
      x: number
      y: number
      value: string
    }
    mask: {
      x: number
      y: number
      w: number
      h: number
    }
  }
}
