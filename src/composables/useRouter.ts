/**
 * 路由操作
 */
export const useRouter = () => {
  /**
   * 跳转页面
   */
  const onNavto = (url: string) => {
    uni.navigateTo({ url })
  }
  return { onNavto }
}
