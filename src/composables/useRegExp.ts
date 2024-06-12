/**
 * 使用正则
 */
export const useRegExp = () => {
  /**
   * 颜色校验器
   */
  const colorValidator = (value: string) => /^#[0-9a-zA-Z]{6}$/.test(value)

  return { colorValidator }
}
