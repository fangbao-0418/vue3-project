import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import APP from '@/utils/app'
import router from '@/router'

function http <T> (url: string, config?: AxiosRequestConfig): Promise<T> {
  return axios(url,  config).then((res) => {
    if (res.status === 200) {
      const data = res.data
      const code = data.code
      if (code === 200) {
        return data.data
      } else if (code === 401) {
        console.log(router, 'router')
        router.push('/logout')
      } else {
        APP.$message.error(data.msg || data.result)
      }
    }
    return Promise.reject(res)
  })
}

http.post = function (url: string, data?: any, config?: AxiosRequestConfig) {
  return http(url, {
    method: 'POST',
    ...config,
    data: data
  } )
}

http.get = function <T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
  return http<T>(url, {
    method: 'GET',
    ...config,
    data: data
  } )
}

export default http