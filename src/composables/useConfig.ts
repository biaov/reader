import type { AppConfig } from './types'

/**
 * 应用设置
 */
export const useConfig = () => {
  const config = ref<AppConfig>({
    theme: '#409eff'
  })

  const setConfig = (option: Partial<AppConfig>) => {
    Object.assign(config.value, option)
  }

  return [config, setConfig] as const
}
