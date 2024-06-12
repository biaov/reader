import { defineStore } from 'pinia'
import { setStorage, getStorage, removeStorage } from '@/utils/storage'
import type { ConfigState } from './types'

/**
 * 缓存 token
 */
const tokenStorage = getStorage('config') as ConfigState

/**
 * 默认配置
 */
const defaultConfig = (): ConfigState => {
  const themes = ['#409eff', '#67c23a', '#f56c6c', '#e6a23c', '#909399']
  return { theme: themes[0], themes }
}

/**
 * 修改的字段
 */
const fields = Object.keys(defaultConfig())

export const useConfigStore = defineStore('config', {
  state: () => ({ ...(tokenStorage || defaultConfig()), tempAddTheme: '' }),
  actions: {
    /**
     * 更新主题
     */
    updateConfig(data: Partial<ConfigState>) {
      fields.forEach(key => {
        const field = key as keyof ConfigState
        const item = data[field]
        item && (this[field] = item as UnionToIntersection<typeof item>)
      })
      this.updateStorage()
    },
    /**
     * 更新缓存
     */
    updateStorage() {
      const config: Record<string, any> = {}
      fields.forEach(field => {
        config[field] = this[field as keyof ConfigState]
      })
      setStorage('config', config)
    },
    /**
     * 更新临时主题
     */
    updateTempTheme(value: string) {
      this.tempAddTheme = value
    }
  }
})
