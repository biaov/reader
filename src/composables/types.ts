/**
 * 应用配置
 */
export interface AppConfig {
  /**
   * 主题色
   */
  theme: string
  /**
   * 所有主题色
   */
  themes: string[]
}

/**
 * useVisible
 */
export namespace USEVisible {
  interface Props extends Record<string, any> {
    visible: boolean
  }

  interface Emits extends Record<string, any> {
    (event: 'update:visible', value: boolean): void
  }

  export interface VisibleAnimation {
    props: Props
    emit: Emits
    init?: () => void
    duration?: number
  }
}
