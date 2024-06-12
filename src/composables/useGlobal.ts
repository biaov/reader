/**
 * 全局变量
 */
export const useGlobal = () => {
  const that = getCurrentInstance()!.proxy
  return { that }
}
