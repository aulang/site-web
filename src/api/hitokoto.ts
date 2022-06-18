import request from '@/utils/request'

export function getHitokoto() {
  return request.get('https://v1.hitokoto.cn')
}
