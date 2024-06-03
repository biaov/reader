const request = (option: UniApp.RequestOptions) => {
  const config = {
    sslVerify: false,
    dataType: 'json',
    timeout: 100000,
    ...option,
    url: import.meta.env.VITE_BASE_URL + option.url
  }
  return new Promise((resolve, reject) => {
    uni.request({
      ...config,
      success: res => {
        const { statusCode, data } = res
        switch (statusCode) {
          case 200:
            resolve(data)
            break
          default:
            reject(res)
            break
        }
      },
      fail: error => {
        reject(error)
      }
    })
  })
}

/**
 * 请求服务
 */
export const service = {
  get: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'GET' }),
  post: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'POST' }),
  put: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'PUT' }),
  delete: (url: string, option: Partial<UniApp.RequestOptions> = {}) => request({ ...option, url, method: 'DELETE' })
}

/**
 * 获取文件内容
 */
export const loadFileContent = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      success: res => {
        const { statusCode, data } = res
        switch (statusCode) {
          case 200:
            resolve(data as string)
            break
          default:
            reject(res)
            break
        }
      },
      fail: error => {
        reject(error)
      }
    })
  })
}
