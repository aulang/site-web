import request from '@/utils/request'

export function getHitokoto() {
    return request({
        url: 'https://v1.hitokoto.cn',
        method: 'get'
    })
}