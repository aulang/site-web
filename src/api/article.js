import request from '@/utils/request'

export function getArticlesByPage(pageNo, pageSize, category, keyword) {
    let url = `/article/page?page=${pageNo}&size=${pageSize}`;

    if (category) {
        url = `${url}&category=${category}`;
    }
    if (keyword) {
        url = `${url}&keyword=${keyword}`;
    }

    return request({
        url: url,
        method: 'get'
    })
}

export function getArticleById(id) {
    return request({
        url: `/article/${id}`,
        method: 'get'
    })
}

export function getCategories() {
    return request({
        url: '/category',
        method: 'get'
    })
}