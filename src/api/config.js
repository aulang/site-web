import request from '@/utils/request'

export function getConfig() {
    return request({
        url: '/config',
        method: 'get'
    })
}