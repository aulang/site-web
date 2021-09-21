import request from '@/utils/request'

export function getArticlesByPage(pageNo, pageSize) {
    return request({
        url: `/article/page?page=${pageNo}&size=${pageSize}`,
        method: 'get'
    })
}

export function getCategories() {
    return request({
        url: '/category',
        method: 'get'
    })
}