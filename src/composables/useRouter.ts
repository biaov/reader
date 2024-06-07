/**
 * 路由操作
 */
export const useRouter = () => {
  /**
   * 跳转页面
   */
  const push = (url: string) => {
    if (!url) return
    uni.navigateTo({ url })
  }

  /**
   * 打开第三方页面
   */
  const open = (url: string) => {
    if (!url) return
    // #ifdef H5
    window.open(url, '_blank')
    // #endif
    // #ifdef APP-PLUS
    plus.runtime.openURL(url)
    // #endif
  }

  /**
   * 返回之前页面
   */
  const back = (delta: number = 1) => {
    uni.navigateBack({ delta })
  }

  return { push, open, back }
}
