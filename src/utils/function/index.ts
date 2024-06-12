/**
 * rpx 转 px
 */
export const rpxtopx = (value: number) => {
  const { windowWidth } = uni.getSystemInfoSync()
  const radio = windowWidth / 750
  return value * radio
}
