import type { USEVisible } from './types'

/**
 * 显示状态
 */
export const useVisible = (initVisible = false) => {
  /**
   * 是否显示
   */
  const visible = ref(initVisible)

  /**
   * 设置显示状态
   */
  const setVisible = (value: boolean) => {
    visible.value = value
  }

  return [visible, setVisible] as const
}

/**
 * 弹窗显示动画
 */
export const useVisibleAnimation = <T extends USEVisible.VisibleAnimation>({ props, emit, init, duration = 400 }: T) => {
  const isShow = ref(false)
  let timer: NodeJS.Timeout
  const onOpen = () => {
    nextTick(() => {
      isShow.value = true
    })
  }
  const onClose = () => {
    if (!props.visible) return
    isShow.value = false
    clearTimeout(timer)
    timer = setTimeout(() => {
      init && init()
      emit('update:visible', false)
    }, duration)
  }

  return { isShow, onOpen, onClose, duration }
}
