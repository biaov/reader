/**
 * 获取底部高度
 */
export const useSystemInfo = () => {
  const { screenHeight, safeArea, windowHeight, windowTop } = uni.getSystemInfoSync()
  const iosBottomHeight = screenHeight - safeArea!.bottom
  return { iosBottomHeight, windowHeight, windowTop }
}
