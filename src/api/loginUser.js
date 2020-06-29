import request from '@/utils/request'

export function getAllUser() {
  return request({
    url: '/getUser',
    method: 'get'
  })
}

export function deteleId(id) {
  return request({
    url: `/detele/${id}`,
    method: 'delete'
  })
}


export function updateUser(data) {
  return request({
    url: `/updateUser`,
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}
