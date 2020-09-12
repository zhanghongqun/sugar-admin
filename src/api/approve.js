import request from '@/utils/request'

export function fetchList(filter) {
    return request({
        url: '/process?status=' + filter.status,
        method: 'get'
    })
}

export function audit(param) {
    return request({
        url: '/process',
        method: 'put',
        data: param
    })
}


export function getProcess(id) {
    return request({
        url: '/process/' + id,
        method: 'get'
    })
}