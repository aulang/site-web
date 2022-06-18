import { ElMessage } from 'element-plus'

/**
 * 提示信息封装
 *
 * 具体的实现与调用方的解耦合，需要更改提示组件，此类可统一修改
 */
class Toast {
  /**
   * 成功提示
   *
   * @param {string} message - 信息内容
   */
  static success(message: string) {
    ElMessage({
      type: 'success',
      message: message,
      showClose: true
    })
  }

  /**
   * 普通信息提示
   *
   * @param {string} message - 信息内容
   */
  static info(message: string) {
    ElMessage({
      type: 'info',
      message: message,
      showClose: true
    })
  }

  /**
   * 警告信息提示
   *
   * @param {string} message - 信息内容
   */
  static warning(message: string) {
    ElMessage({
      type: 'warning',
      message: message,
      showClose: true
    })
  }

  /**
   * 错误信息提示
   *
   * @param {string} message - 信息内容
   */
  static error(message: string) {
    ElMessage({
      type: 'error',
      message: message,
      showClose: true
    })
  }
}

export default Toast
