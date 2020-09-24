import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import APP from '@/utils/app'

function http (url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
  return axios(url,  config).then((res) => {
    console.log(res)
    if (res.status === 200) {
      const data = res.data
      if (data.code === 200) {
        return data.data
      } else {
        APP.$message.error(data.msg)
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

http.get = function (url: string, data?: any, config?: AxiosRequestConfig) {
  return http(url, {
    method: 'GET',
    ...config,
    data: data
  } )
}

export default http