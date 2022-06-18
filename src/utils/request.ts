import axios from 'axios'
import Toast from '@/utils/toast'

const baseURL = import.meta.env.VITE_API_URL

/**
 * 创建axios实例
 */
const instance = axios.create({
  baseURL,
  timeout: 10000
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    // 设置请求头部信息
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    Toast.error(error.message)
    return Promise.reject(error)
  }
)

export default instance
