// 封装一个axios

import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
const instance: AxiosInstance = axios.create({
  baseURL: 'https://156.224.26.251/',
  timeout: 5000, // 设置请求超时时间
})
// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加token
    if (!localStorage.getItem('toekn')) {
      console.log('登录')
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
  },
  (error) => {
    // 对请求错误做点什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么，例如处理返回的错误信息
    // if (response.data.code !== 200) {
    //   console.error('请求出错：', response.data.message)
    // }
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default instance
