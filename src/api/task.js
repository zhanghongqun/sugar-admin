import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/task/list',
    method: 'get',
    params: query
  })
}

export function fetchTask(id) {
  console.log(id)
  return request({
    url: '/task/'+id,
    method: 'get',
    params: {}
  })
}

export function createTask(data) {
  return request({
    url: '/task',
    method: 'post',
    data
  })
}

export function updateTask(data) {
  return request({
    url: '/task/update',
    method: 'post',
    data
  })
}


