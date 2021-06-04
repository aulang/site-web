import request from '@/utils/request'

export function getHitokoto() {
    return request({
        url: 'https://v1.hitokoto.cn?c=d&c=i&c=k&encode=json&charset=utf-8',
        method: 'get'
    })
}