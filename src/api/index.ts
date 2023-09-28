// 封装一个axios

import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useMessage } from 'naive-ui'
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 设置基础URL
  timeout: 5000, // 设置请求超时时间
})
const message = useMessage()
// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加token
    if (!localStorage.getItem('toekn')) {
      message.error('请先登录')
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
    if (response.data.code !== 200) {
      console.error('请求出错：', response.data.message)
    }
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
// 定义get请求
export function get<T>(url: string, params?: any): Promise<AxiosResponse<T, any>> {
  return instance.get<T>(url, params)
}

// 定义post请求
export function post<T>(url: string, data: any): Promise<AxiosResponse<T, any>> {
  return instance.post<T>(url, data)
}

// 定义put请求
export function put<T>(url: string, data: any): Promise<AxiosResponse<T, any>> {
  return instance.put<T>(url, data)
}

export function del<T>(url: string, data: any): Promise<AxiosResponse<T, any>> {
  return instance.delete<T>(url, data)
}
