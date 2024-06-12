import type { AppConfig } from './types'

/**
 * 应用设置
 */
export const useConfig = () => {
  const config = ref<AppConfig>({
    theme: '#409eff',
    themes: ['#409eff', '#67c23a', '#f56c6c', '#e6a23c', '#909399']
  })

  const setConfig = (option: Partial<AppConfig>) => {
    Object.assign(config.value, option)
  }

  return [config, setConfig] as const
}

/**
 * 获取底部高度
 */
export const useSystemInfo = () => {
  const { screenHeight, safeArea, windowHeight, windowTop } = uni.getSystemInfoSync()
  const iosBottomHeight = screenHeight - safeArea!.bottom
  return { iosBottomHeight, windowHeight, windowTop }
}
