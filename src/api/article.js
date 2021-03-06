import request from '@/utils/request'

export function articlesPage(pageNo, pageSize) {
    return request({
        url: `/articles/page?page=${pageNo}&pageSize=${pageSize}`,
        method: 'get'
    })
}

export function getCategories() {
    return request({
        url: '/categories',
        method: 'get'
    })
}