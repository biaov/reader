/**
 * 主题设置
 */
export const theme = {
  white: '#fff',
  primary: '#409eff',
  success: '#67c23a',
  info: '#909399',
  warning: '#e6a23c',
  danger: '#f56c6c'
}

/**
 * 自定义颜色
 */
export const customColor = [85, 60, 45, 2].reduce(
  (prev, item) => {
    prev[`custom-${item}`] = `rgba(0, 0, 0, ${item / 100})`
    return prev
  },
  {} as Record<string, string>
)
