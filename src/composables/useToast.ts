/**
 * 提示
 */
export const useToast = () => {
  const toast = (title: string = '操作失败') => {
    uni.showToast({
      title,
      icon: 'none',
      mask: true,
      duration: 2000
    })
  }

  return { toast }
}
