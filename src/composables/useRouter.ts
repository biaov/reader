import pagesJson from '@/pages.json'

/**
 * 路由操作
 */
export const useRouter = () => {
  /**
   * 跳转页面
   */
  const push = (url: string) => {
    if (!url) return
    if (url.includes('pages/tabbar/')) {
      uni.switchTab({ url })
    } else {
      uni.navigateTo({ url })
    }
  }

  /**
   * 关闭当前页面打开第三方页面
   */
  const replace = (url: string) => {
    if (!url) return
    uni.redirectTo({ url })
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
    const pages = getCurrentPages()
    if (pages.length > delta) {
      uni.navigateBack({ delta })
    } else {
      push(`/${pagesJson.pages[0].path}`)
    }
  }

  return { push, replace, open, back }
}
